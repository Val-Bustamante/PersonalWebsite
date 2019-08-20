//Navbar background appears when scrolling down with added shadow
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("ul").css("background", "transparent");
            $("ul").css(" -webkit-box-shadow", "none");
            $("ul").css("-moz-box-shadow", "none");
            $("ul").css("box-shadow", "none");
        } else {
            $("ul").css("background", "rgb(250, 196, 205, 1)");
            $("ul").css("transition", "background-color 200ms linear");
            $("ul").css(" -webkit-box-shadow", "0 6px 12px -3px rgb(153,153,153, 0.7)");
            $("ul").css("-moz-box-shadow", "0 6px 12px -3px rgb(153,153,153, 0.7)");
            $("ul").css("box-shadow", "0 6px 12px -3px rgb(153,153,153, 0.7)");
        }
    })
})



$(document).ready(function() {

    //Initial state of Involvement divs
    $("#shpe-div").hide();
    $("#honor-div").hide();
    $("#ANY-div").hide();
    $("#LEADS-div").hide();
    $("#DAL-div").hide();

    //For third section (Involvement)
    //Controls involvement container click events
    //When container clicked once, corresponding div shows up and fourth section top increases effectively moving it down 
    //If same container clicked twice, then it becomes hidden and top of fourth section returns to normal state
    //If container's div is visible and another container is clicked, that div becomes hidden and corresponding div on new clicked container appears
    $("#third-section-background").on('click', "#shpe", function(event) {

        event.preventDefault();
        $("#shpe-div").toggle();
        $("#honor-div").hide();
        $("#ANY-div").hide();
        $("#LEADS-div").hide();
        $("#DAL-div").hide();

        var $this = $('.fourth-section-top-perm');
        var $thisFifth = $('.fifth-section-top-perm');
        if ($("#shpe-div").css("display") == "none") {
            $this.removeClass('change-fourth-section-top');
            $thisFifth.removeClass('change-fifth-section-top-involve');
            if (!$this.hasClass('fourth-section-top'))
                $this.addClass('fourth-section-top');
            if (!$thisFifth.hasClass('fifth-section-top'))
                $thisFifth.addClass('fifth-section-top');
        } else {
            $this.addClass('change-fourth-section-top');
            $thisFifth.addClass('change-fifth-section-top-involve');
            if ($this.hasClass('fourth-section-top'))
                $this.removeClass('fourth-section-top');
            if ($thisFifth.hasClass('fifth-section-top'))
                $thisFifth.removeClass('fifth-section-top');
        }

    });

    $("#third-section-background").on('click', "#honorboard", function(event) {
        event.preventDefault();
        $("#honor-div").toggle();
        $("#shpe-div").hide();
        $("#ANY-div").hide();
        $("#LEADS-div").hide();
        $("#DAL-div").hide();

        var $this = $('.fourth-section-top-perm');
        var $thisFifth = $('.fifth-section-top-perm');
        if ($("#honorboard-div").css("display") == "none") {
            $this.removeClass('change-fourth-section-top');
            $thisFifth.removeClass('change-fifth-section-top-involve');
            if (!$this.hasClass('fourth-section-top'))
                $this.addClass('fourth-section-top');
            if (!$thisFifth.hasClass('fifth-section-top'))
                $thisFifth.addClass('fifth-section-top');
        } else {
            $this.addClass('change-fourth-section-top');
            $thisFifth.addClass('change-fifth-section-top-involve');
            if ($this.hasClass('fourth-section-top'))
                $this.removeClass('fourth-section-top');
            if ($thisFifth.hasClass('fifth-section-top'))
                $thisFifth.removeClass('fifth-section-top');
        }
    });

    $("#third-section-background").on('click', "#ANY", function(event) {
        event.preventDefault();
        $("#ANY-div").toggle();
        $("#shpe-div").hide();
        $("#honor-div").hide();
        $("#LEADS-div").hide();
        $("#DAL-div").hide();

        var $this = $('.fourth-section-top-perm');
        var $thisFifth = $('.fifth-section-top-perm');
        if ($("#ANY-div").css("display") == "none") {
            $this.removeClass('change-fourth-section-top');
            $thisFifth.removeClass('change-fifth-section-top-involve');
            if (!$this.hasClass('fourth-section-top'))
                $this.addClass('fourth-section-top');
            if (!$thisFifth.hasClass('fifth-section-top'))
                $thisFifth.addClass('fifth-section-top');
        } else {
            $this.addClass('change-fourth-section-top');
            $thisFifth.addClass('change-fifth-section-top-involve');
            if ($this.hasClass('fourth-section-top'))
                $this.removeClass('fourth-section-top');
            if ($thisFifth.hasClass('fifth-section-top'))
                $thisFifth.removeClass('fifth-section-top');
        }

    });

    $("#third-section-background").on('click', "#LEADS", function(event) {
        event.preventDefault();
        $("#LEADS-div").toggle();
        $("#shpe-div").hide();
        $("#honor-div").hide();
        $("#ANY-div").hide();
        $("#DAL-div").hide();

        var $this = $('.fourth-section-top-perm');
        var $thisFifth = $('.fifth-section-top-perm');
        if ($("#LEADS-div").css("display") == "none") {
            $this.removeClass('change-fourth-section-top');
            $thisFifth.removeClass('change-fifth-section-top-involve');
            if (!$this.hasClass('fourth-section-top'))
                $this.addClass('fourth-section-top');
            if (!$thisFifth.hasClass('fifth-section-top'))
                $thisFifth.addClass('fifth-section-top');
        } else {
            $this.addClass('change-fourth-section-top');
            $thisFifth.addClass('change-fifth-section-top-involve');
            if ($this.hasClass('fourth-section-top'))
                $this.removeClass('fourth-section-top');
            if ($thisFifth.hasClass('fifth-section-top'))
                $thisFifth.removeClass('fifth-section-top');
        }
    });

    $("#third-section-background").on('click', "#DAL", function(event) {
        event.preventDefault();
        $("#DAL-div").toggle();
        $("#shpe-div").hide();
        $("#honor-div").hide();
        $("#ANY-div").hide();
        $("#LEADS-div").hide();

        var $this = $('.fourth-section-top-perm');
        var $thisFifth = $('.fifth-section-top-perm');
        if ($("#DAL-div").css("display") == "none") {
            $this.removeClass('change-fourth-section-top');
            $thisFifth.removeClass('change-fifth-section-top-involve');
            if (!$this.hasClass('fourth-section-top'))
                $this.addClass('fourth-section-top');
            if (!$thisFifth.hasClass('fifth-section-top'))
                $thisFifth.addClass('fifth-section-top');
        } else {
            $this.addClass('change-fourth-section-top');
            $thisFifth.addClass('change-fifth-section-top-involve');
            if ($this.hasClass('fourth-section-top'))
                $this.removeClass('fourth-section-top');
            if ($thisFifth.hasClass('fifth-section-top'))
                $thisFifth.removeClass('fifth-section-top');
        }

    });


    //When involve container is clicked, scaling stays increased
    //If clicked again, scaling is removed and goes back to normal state
    $("#third-section-background").on('click', '.involve-containers', function(event) {
        event.preventDefault();
        $(this).toggleClass('clicked').siblings().removeClass('clicked');

    });


    $("#id-office-div").hide();
    $("#precollege-social-div").hide();
    $("#software-instructor-div").hide();
    $("#precollege-couselor-div").hide();

    $("#fourth-section-background").on('click', '.experience-containers', function(event) {
        event.preventDefault();
        $(this).toggleClass('clicked').siblings().removeClass('clicked');

    });


    $("#fourth-section-background").on('click', "#id-office", function(event) {

        event.preventDefault();
        $("#id-office-div").toggle();
        $("#precollege-social-div").hide();
        $("#software-instructor-div").hide();
        $("#precollege-couselor-div").hide();


        var $this = $('.fifth-section-top-perm');
        if ($("#id-office-div").css("display") == "none") {
            $this.removeClass('change-fifth-section-top');
            if (!$this.hasClass('fifth-section-top'))
                $this.addClass('fifth-section-top');
        } else {
            $this.addClass('change-fifth-section-top');
            if ($this.hasClass('fifth-section-top'))
                $this.removeClass('fifth-section-top');
        }

    })

    $("#fourth-section-background").on('click', "#precollege-social", function(event) {

        event.preventDefault();
        $("#id-office-div").hide();
        $("#precollege-social-div").toggle();
        $("#software-instructor-div").hide();
        $("#precollege-couselor-div").hide();


        var $this = $('.fifth-section-top-perm');
        if ($("#precollege-social-div").css("display") == "none") {
            $this.removeClass('change-fifth-section-top');
            if (!$this.hasClass('fifth-section-top'))
                $this.addClass('fifth-section-top');
        } else {
            $this.addClass('change-fifth-section-top');
            if ($this.hasClass('fifth-section-top'))
                $this.removeClass('fifth-section-top');


        }

    })

    $("#fourth-section-background").on('click', "#software-instructor", function(event) {

        event.preventDefault();
        $("#id-office-div").hide();
        $("#precollege-social-div").hide();
        $("#software-instructor-div").toggle();
        $("#precollege-couselor-div").hide();

        var $this = $('.fifth-section-top-perm');
        if ($("#software-instructor-div").css("display") == "none") {
            $this.removeClass('change-fifth-section-top');
            if (!$this.hasClass('fifth-section-top'))
                $this.addClass('fifth-section-top');
        } else {
            $this.addClass('change-fifth-section-top');
            if ($this.hasClass('fifth-section-top'))
                $this.removeClass('fifth-section-top');
        }

    })

    $("#fourth-section-background").on('click', "#precollege-couselor", function(event) {

        event.preventDefault();
        $("#id-office-div").hide();
        $("#precollege-social-div").hide();
        $("#software-instructor-div").hide();
        $("#precollege-couselor-div").toggle();


        var $this = $('.fifth-section-top-perm');
        if ($("#precollege-couselor-div").css("display") == "none") {
            $this.removeClass('change-fifth-section-top');
            if (!$this.hasClass('fifth-section-top'))
                $this.addClass('fifth-section-top');
        } else {
            $this.addClass('change-fifth-section-top');
            if ($this.hasClass('fifth-section-top'))
                $this.removeClass('fifth-section-top');


        }

    })
})