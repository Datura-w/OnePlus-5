//汉堡包按钮
	$(function(){
		$("ul.icons span.glyphicon-menu-hamburger").click(function(){
			$(".header nav").slideToggle(800);
           		$('.menu>ul').slideDown("slow");
			
		})
	})

//服务菜单弹出
       $(function(){
           $(".ul-word").click(function(){
               $(this).find("ul").slideToggle("slow");
               $(this).find("span").toggleClass("arrow-open");
          });
        })
       
//小屏幕搜索框点击       
       $(function(){
           $(".search-text").focus(function(){
           		$('.menu>ul').slideUp("slow");
//小标签显示                
                   $('.i-show-menu').show();
                   $('.i-show-menu').css("margin-top","36px");
                   $('.search-form').css("margin-top","36px");
                  $(".i-show-menu i").removeClass("change");
          });
       })
       
//点击下拉箭头,弹出菜单
        $(document).ready(function(){
           $(".i-show-menu").click(function(){

                   $(".i-show-menu i").addClass("change");
                
                setTimeout(function(){
                	$(".menu>ul").slideDown("slow");
//             $(".i-show-menu").find("i").toggleClass("ii");
                   $('.i-show-menu').hide();
                },350)
                
           });
        });
        