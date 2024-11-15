pipeline {
    agent any
    tools {
       //Define a versao do Node a ser utilizada pelo Jenkins
        nodejs "node 18.18.0"
    }

    environment {
        CI = "false"  // Configura CI=false globalmente, para nao tratar advertencias de código como erro de compilação.
    }

    stages {
        stage('Checkout') {
            steps {
                //Faz checkout do repositorio
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], userRemoteConfigs: [[url: 'https://github.com/rdalmarco/frontend-smartain.git']]])
            }
        }

        stage('Build') {
            steps {
                //Build
                bat 'node -v'
                bat 'npm install'
                bat 'npm run build'
            }
        }
    }
}
