module.exports = function (text) {
    // PRIVATE
    this.text = text;


    // PUBLIC
    var public = this;

    public.getText = function () {
        return public.text;
    };

    public.setText = function (text) {
        public.text = text;
        return public;
    };

    public.cleaning = function () {
        public.text = public.text.replace(/\r\n|\r|\n/, '<br/>');
        return public;
    };

    public.coloring = function (color) {
        public.text = '<span style="color: ' + color + '">' + public.text + '</span>' + '<br/>';
        return public;
        // return this;
    };

    return public;
};
