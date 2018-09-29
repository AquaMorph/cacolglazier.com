node {
    stage('Git') {
        deleteDir()
        git branch: 'master', credentialsId: 'a14847e5-f1a5-48d1-8833-9709f75f8471', url: 'git@github.com:AquaMorph/cacolglazier.com.git'
    }
    stage('Build') {
        sh 'hugo --minify'
   }
    stage('Deploy') {
        withCredentials([usernamePassword(credentialsId: 'cacolglazier_ftp', passwordVariable: 'PASSWD', usernameVariable: 'USER')]) {
            sh '''
                cd public
                ncftpput -R -v -u ${USER} -p ${PASSWD} cacolglazier.com /public_html .
            '''
        }
   }
}
