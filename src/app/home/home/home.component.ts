import { Component, OnInit } from '@angular/core';
import {Course} from "../Models/Course-model";
import {CourseServiceService} from "./Services/course-service.service";
import {SwiperOptions} from "swiper";
import {CombinedCourse} from "../Models/CombinedCourse";
import {CombinedCourseService} from "./Services/combined-course.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listCourse: Course[] =[];
  listCombinedCourse : CombinedCourse[] =[];



  constructor(private courseservice:CourseServiceService,private combinedcourseservice :CombinedCourseService) { }



  opened = false;
  ngOnInit(): void {
    this.courseservice.getlistcourse().subscribe((res:Course[])=>{
      this.listCourse = res;
      console.log(res)
    });
    this.combinedcourseservice.getListCombinedCourse().subscribe(res=>{
      this.listCombinedCourse = res;
    })
  }




  listImg = [
    {
      title: "Học ReactJs Miễn Phí",
      description: "Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án " +
        "thường gặp với ReactJS.",
      titleButton: "Đăng kí ngay",
      urlImg: "https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png",
      style: {
        background:"linear-gradient(to right, #3399ff 0%, #9900ff 100%)"
      }
    },
    {
      title: "Thành Quả của Học Viên",
      description: "Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.",
      titleButton: "Xem thành quả",
      urlImg: "https://files.fullstack.edu.vn/f8-prod/banners/Banner_01_2.png",
      style: {
        background:"linear-gradient(to right, #9900ff 0%, #3366ff 100%)"
      }
    },
    {
      title: "F8 trên Youtube",
      description: "F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.",
      titleButton: "Truy cập kênh",
      urlImg: "https://files.fullstack.edu.vn/f8-prod/banners/Banner_03_youtube.png",
      style: {
        background:"linear-gradient(to right, #ff0066 0%, #ff6600 100%)"
      }
    },
    {
      title: "F8 trên Facebook",
      description: "F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.",
      titleButton: "Truy cập nhóm",
      urlImg: "https://files.fullstack.edu.vn/f8-prod/banners/Banner_04_2.png",
      style: {
        background:"linear-gradient(to right, #0066ff 0%, #99ccff 100%)"
      }
    },

  ];
  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.arrow-right',
      prevEl: '.arrow-left'
    },
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    spaceBetween: 30
  };
  selectedIndex = 0;

  name = 'Angular';
  imageObject = [{
    image: '/assets/img/ktnt.png',
    thumbImage: '/assets/img/ktnt.png',
    title: 'Kiến Thức Nhập Môn IT'
  }, {
    image: '/assets/img/html.png',
    thumbImage: '/assets/img/html.png',
    title: 'HTML, CSS từ Zero đến Hero'
  }, {
    image: '/assets/img/reponsive.png',
    thumbImage: '/assets/img/reponsive.png',
    title: 'Responsive Với Grid System'
  },{
    image: '/assets/img/javascript.png',
    thumbImage: '/assets/img/javascript.png',
    title: 'Lập Trình JavaScript Cơ Bản'
  }, {
    image: '/assets/img/javanc.png',
    thumbImage: '/assets/img/javanc.png',
    title: 'Lập Trình JavaScript Nâng Cao'
  }, {
    image: '/assets/img/ubuntu.png',
    thumbImage: '/assets/img/ubuntu.png',
    title: 'Làm việc với Terminal & Ubuntu.'
  },{
    image: '/assets/img/react.png',
    thumbImage: '/assets/img/react.png',
    title: 'Xây Dựng Website với ReactJS.'
  }];

  imageObjectBE = [{
    image: '/assets/img/ktnt.png',
    thumbImage: '/assets/img/ktnt.png',
    title: 'Kiến Thức Nhập Môn IT'
  }, {
    image: '/assets/img/html.png',
    thumbImage: '/assets/img/html.png',
    title: 'HTML, CSS từ Zero đến Hero'
  }, {
    image: '/assets/img/javascript.png',
    thumbImage: '/assets/img/javascript.png',
    title: 'Lập Trình JavaScript Cơ Bản'
  }, {
    image: '/assets/img/javanc.png',
    thumbImage: '/assets/img/javanc.png',
    title: 'Lập Trình JavaScript Nâng Cao'
  }, {
    image: '/assets/img/ubuntu.png',
    thumbImage: '/assets/img/ubuntu.png',
    title: 'Làm việc với Terminal & Ubuntu.'
  },{
    image: '/assets/img/nodejs.png',
    thumbImage: '/assets/img/nodejs.png',
    title: 'Node & ExpressJS'
  }];
}
