module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-aws');
  grunt.loadNpmTasks('grunt-webp');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.initConfig({
    aws: grunt.file.readJSON("credentials.json"),

    webp: {
      files: {
        expand: true,
        src: 'headshots/*.jpg'
      }
    },

    imagemin: {
      files: {
        expand: true,
        src: 'headshots/*.jpg'
      }
    },

    s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        bucket: "dobt-misc"
      },
      build: {
        cwd: "headshots/",
        src: "**",
        dest: "headshots/",
        options: {
          access: 'public-read'
        }
      }
    }
  });

  grunt.registerTask('process', ['webp', 'imagemin']);
};
