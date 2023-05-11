
# for configuring ami

sudo su

yum update -y
amazon-linux-extras install docker

yum install amazon-cloudwatch-agent
amazon-linux-extras install collectd

mkdir -p /user/share/collectd
touch /user/share/collectd/types.db

/opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-config-wizard # only required for configuring the first time)

# for user data script

#!/bin/bash

/opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c ssm:AmazonCloudWatch-ec2linux-no-logs -s

TOKEN=`curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600"` \
&& INSTANCE_ID=`curl -H "X-aws-ec2-metadata-token: $TOKEN" -v http://169.254.169.254/latest/meta-data/instance-id`
aws ec2 modify-instance-metadata-options --instance-id $INSTANCE_ID --http-put-response-hop-limit 2 --http-endpoint enabled --region ap-southeast-1

sudo service docker start
sudo docker pull jieqiangtan/hush-retreat-prod:latest
sudo docker run -d --rm -p 80:3000 --name hush-retreat-server \
-e MONGO_URI=$(aws ssm get-parameter --name MONGO_URI | jq -r '.Parameter' | jq -r '.Value') \
-e MONGO_USER=$(aws ssm get-parameter --name MONGO_USER | jq -r '.Parameter' | jq -r '.Value') \
-e MONGO_DBNAME=$(aws ssm get-parameter --name MONGO_DBNAME | jq -r '.Parameter' | jq -r '.Value') \
-e MONGO_PW=$(aws ssm get-parameter --name MONGO_PW --with-decryption | jq -r '.Parameter' | jq -r '.Value') \
jieqiangtan/hush-retreat-prod:latest

# for redeployment
sudo docker stop hush-retreat-server
sudo docker rmi jieqiangtan/hush-retreat-prod:latest
sudo docker pull jieqiangtan/hush-retreat-prod:latest
sudo docker run -d --rm -p 80:3000 --name hush-retreat-server \
-e MONGO_URI=$(aws ssm get-parameter --name MONGO_URI | jq -r '.Parameter' | jq -r '.Value') \
-e MONGO_USER=$(aws ssm get-parameter --name MONGO_USER | jq -r '.Parameter' | jq -r '.Value') \
-e MONGO_DBNAME=$(aws ssm get-parameter --name MONGO_DBNAME | jq -r '.Parameter' | jq -r '.Value') \
-e MONGO_PW=$(aws ssm get-parameter --name MONGO_PW --with-decryption | jq -r '.Parameter' | jq -r '.Value') \
jieqiangtan/hush-retreat-prod:latest



# to go into docker container
docker exec -it hush-retreat-server sh