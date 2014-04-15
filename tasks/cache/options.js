var path = require("path")
  , exports = require("./exports")
  , lang = require("./lang")
  , marked = require("marked")
  , fs = require("fs")
  , lodash = require("lodash")

module.exports = {
  update : function(){
    this.value.locals.pages = exports.value
    this.value.locals.lang = lang.value
  },
  value : {
    basedir : path.resolve(__dirname, "../../"),
    locals : {
      pages : exports.value,
      lang : lang.value,
      path : {
        relative : function(from, to){
          if(to.indexOf("http") === 0) {
            return to
          }
          return path.relative(from.replace(/index$/, ""), to)
        },
        join : path.join
      },
      getPages : function(object){
        return lodash.where(exports.value, object)
      },
      getFeedDescription : function(post){
        return marked(
          fs.readFileSync(
            path.resolve(__dirname, "../../pages/", post + ".md"),
            "utf-8"
          )
        )
      }
    }
  }
}
