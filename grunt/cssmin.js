module.exports = {
  options: {
    aggressiveMerging: false,
    shorthandCompacting: false,
    processImport: false,
    rebase: false,
    keepSpecialComments: 0
  },
  target: {
    files: {
      'dist/tooltips.min.css': ['dist/tooltips.css']
    }
  }
};
