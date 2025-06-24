pipeline {
    agent any
    
    tools {
        nodejs "NodeJS" 
    }

    environment {
        RENDER_URL = 'https://gallery-rxej.onrender.com'
    }

    triggers {
        githubPush()
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
            post {
                failure {
                    emailext (
                        subject: "Build Failed",
                        body: "The build has failed. Please check the console output.",
                        to: "bnjeremy.ke@gmail.com"
                    )
                }
            }
        }  
        
        stage('Deploy to Render') {
            steps {
                echo 'Deploying to Render...'
            }
        }
    }
    
    post {
        success {
            slackSend (
                channel: '#jeremy_ip1',
                color: 'good',
                message: "✅ Deployment Successful!\nBuild ID: ${env.BUILD_NUMBER}\nWebsite: ${env.RENDER_URL}"
            )
        }
    }
}