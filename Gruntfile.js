module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-aws');

  grunt.initConfig({
    aws: grunt.file.readJSON("credentials.json"),
    s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        bucket: "dobt-misc"
      },
      build: {
        cwd: "img/",
        src: "**",
        dest: "headshots/",
        options: {
          access: 'public-read'
        }
      }
    }
  });

};
