pipeline {
    agent any
    
    tools {
        nodejs "NodeJS" 
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
        
        stage('Deploy to Render') {
            steps {
                // Render deploys automatically on git push if connected
                echo 'Deploying to Render...'
                // You might need to trigger Render deployment via webhook
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline completed'
        }
    }
}