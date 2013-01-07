// moment.js language configuration
// language : Arabic (ar)
(function () {
    var lang = {
            months : "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_iأغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays : "الأحد_يوم الاثنين_الثلاثاء_iالأربعاء_الخميس_الجمعة_iالسبت".split("_"),
            weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat : {
                LT : "h:mm A",
                L : "DD/MM/YYYY",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY LT",
                LLLL : "dddd, D MMMM YYYY LT"
            },
            calendar : {
                sameDay : 'LT [اليوم في]',
                nextDay : 'LT [غدا في الساعة]',
                nextWeek : 'LT [يوم] dddd [يوم]', 
                lastDay : 'LT [أمس في]',
                lastWeek : 'LT [iالماضي في الساعة] dddd', 
                sameElse : 'L'
            },
            relativeTime : {
                future : "%s في",
                past : "%s منذ",
                s : "ثواني",
                m : "دقيقة",
                mm : "دقائق %d",
                h : "ساعة",
                hh : "سا عات %d",
                d : "يوم",
                dd : "ايام %d",
                M : "شهر",
                MM : "شهور %d",
                y : "سنة",
                yy : "سنوات %d"
            },
            ordinal : function (number) {
                var b = number % 10;
                return (~~ (number % 100 / 10) === 1) ? 'th' :
                    (b === 1) ? 'st' :
                    (b === 2) ? 'nd' :
                    (b === 3) ? 'rd' : 'th';
            }
        };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('ar', lang);
    }
}());
