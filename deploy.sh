echo "\n ... Building application ... \n"
npm run build:prod
echo "\n ... Uploading artifacts ... \n"
scp -r ./dist ubuntu@kubitbot.com.br:/home/ubuntu/kubitbot.com.br
echo "\n ... Installing the application ... \n"
ssh ubuntu@kubitbot.com.br "sudo cp -r /home/ubuntu/kubitbot.com.br /var/www/ && rm -rf /home/ubuntu/kubitbot.com.br"
ssh ubuntu@kubitbot.com.br "sudo chown -R ubuntu:ubuntu /var/www/kubitbot.com.br"
echo "\n ... Succesfull Deploy ... \n"