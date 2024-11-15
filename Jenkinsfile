pipeline {
    agent any
    tools {
        nodejs "node 18.18.0"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/rdalmarco/frontend-smartain.git']]])
            }
        }

        stage('Build') {
            steps {
                bat 'node -v'
                bat 'npm install'
                bat 'npm run build'
            }
        }
    }
}
