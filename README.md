# Lab-16

## AWS: Cloud Servers

### Author: Alan Chelko

### Deployed servers

    * GUI url: http://basicexpressserver-env.eba-gybimdbk.us-east-1.elasticbeanstalk.com/
    * CLI http://basic-express-server-dev.eu-north-1.elasticbeanstalk.com/


### GUI AWS-EB Set-up Process

1. Create application (after entering Elastic Beanstalk domain)
2. Name the application
3. Choose platform -- Node.js (first time through for first app, forces platform choice)
4. Create environment (if you get lost, just click on applications on left...will take you to 'All applicatoins'...then click on app of choice...will take you so screen with big orange button: 'Create New Environment')
5. Choose web server environment
6. Go to environment, choose Node.js again
7. Choose to upload file
8. Zip everything in your server directory, exc. package-lock.json and node_modules
9. Have to wait awhile -- should eventually get a 'Health' green happy check
10. Can click on left on your environment for menu - can click on Logs....and then request log on main screen....for last 100 lines...takes awhile...THEN download
====> if successful, can see 'listening on 8080'
11. Can go back to environment with happy green check, click on it, and see the url...hopefully will get 'happy path' message

### CLI AWS-EB Set-up Process

1. Go to IAM, click on your users (shown as a large integer)
2. Basic default selections
3. At 'create group', give group a name, and select policy name AdministratorAccess-AWSEleasticBeanstalk...and click create group
4. Next: Tags (click and skip it...to go to review)
5. At review, check everything, and then click create user
6. NOW MUST GET ACCESS KEY ID AND SECRET ACCESS KEY (can download CSV as well) -- if you leave page, you lose displayed credentials forever, but you can always get new credentials
7. Now back to CLI
8. aws configure ENTER
9. Then you get the id, secret code, region, and output format (e.g.JSON)
10. You can do a ls just to see where you're at (optional)
11. Now time for EB (3 commands you have to run to init/create/deploy, and then a 4th command to open in browser)
12. If  you forget EB commands, can do eb --help
13. eb init (creates app)
=> bunch of options (went with default with exception of suggestion go with non-default 'no' for Code Commit/SSH questions
14. eb create (creates environment)
==> bunch of questions -- went with default, exc. SpotFleet (went with NO)
==> takes awhile
15. eb deploy (deploys to cloud)
16. eb open (should automatically open in default browser)
