$(document).ready(function() {
    function t() { $(".main_head").css("height", $(window).height()) } $("#portfolio_grid").mixItUp(), $(".s_portfolio li").click(function() { $(".s_portfolio li").removeClass("active"), $(this).addClass("active") }), $(".popup").magnificPopup({ type: "image" }), $(".popup_content").magnificPopup({ type: "inline", midClick: !0 }), $(".animation_1").animated("fadeInLeft", "fadeOutLeft"), $(".animation_2").animated("flipInY", "fadeOutDown"), $(".animation_3").animated("fadeInRight", "fadeOutRight"), $(".left .resume_item").animated("fadeInLeft", "fadeOutDown"), $(".right .resume_item").animated("fadeInRight", "fadeOutDown"), $(".top_text h1").animated("fadeInDown", "fadeOutUp"), $(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown"), t(), $(window).resize(function() { t() }), $(".toggle_menu").click(function() { $(".sandwich").toggleClass("active") }), $(".top_menu ul a").click(function() { $(".top_menu").fadeOut(600), $(".sandwich").toggleClass("active") }).append("<span>"), $(".toggle_menu").click(function() { $(".top_menu").is(":visible") ? ($(".top_text").removeClass("h_opacify"), $(".top_menu").fadeOut(600), $(".top_menu li a").removeClass("fadeInUp animated")) : ($(".top_text").addClass("h_opacify"), $(".top_menu").fadeIn(600), $(".top_menu li a").addClass("fadeInUp animated")) }), $(".portfolio_item").each(function(t) { $(this).find("a").attr("href", "#work_" + t), $(this).find(".port_descr").attr("id", "work_" + t) }), $("input, select, textarea").jqBootstrapValidation(), $(".top_menu ul a").mPageScroll2id() }), $(window).load(function() { $(".loader_inner").fadeOut(), $(".loader").delay(400).fadeOut("slow") });