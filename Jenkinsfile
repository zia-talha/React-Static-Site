pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                // Checkout using HTTPS
                git branch: 'master',
                    credentialsId: 'codecommit-credentials',
                    url: 'https://git-codecommit.ap-south-1.amazonaws.com/v1/repos/zia-repo'

                // Alternatively, checkout using SSH (replace with your SSH URL)
                // git branch: 'main', url: 'ssh://git-codecommit.us-east-1.amazonaws.com/v1/repos/your-repo-name'
            }
        }

        stage('Run Shell Commands') {
            steps {
                script {
                    // Replace with your shell commands
                    sh 'aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 058833617726.dkr.ecr.ap-south-1.amazonaws.com'
                    sh 'docker build -t cyberpip .'
                    sh 'docker tag cyberpip:latest 058833617726.dkr.ecr.ap-south-1.amazonaws.com/cyberpip:latest'
                    sh 'docker push 058833617726.dkr.ecr.ap-south-1.amazonaws.com/cyberpip:latest'  // Example command to build your project
                }
            }
        }
    }
}

