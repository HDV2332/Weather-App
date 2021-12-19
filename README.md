# WEATHER APP
Đây là app hiển thị thời tiết cho khu vực hiện tại đơn giản với Javascript, HTML và CSS.
App có sử dụng API của Dark Sky

### PROXY cho API
Demo của [CORS Anywhere](http://cors-anywhere.herokuapp.com/corsdemo) chỉ dùng cho mục đích phát triển app thời tiết với mục tiêu giáo dục
Phải xin cấp quyền truy cập, cấp phép trong 2 tiếng.
### API:
- [Dark Sky](https://darksky.net/forecast) API 
- Hết quyền sử dụng vào [cuối 2022](https://blog.darksky.net/)  

### Skycons:
[Skycons](https://darkskyapp.github.io/skycons/) là tập 10 glyph animation thời tiết, được tạo lập hệ thống bởi JavaScript bằng tag canvas trong HTML5.

```javascript
<canvas id="icon1" width="128" height="128"></canvas>
<canvas id="icon2" width="128" height="128"></canvas>

<script>
  var skycons = new Skycons({"color": "pink"});
  // với Android, cần thêm: {"resizeClear": true}

  // add vào canvas theo ID của nó...
  skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);

  // ...hoặc theo chính DOM element của canvas đó.
  skycons.add(document.getElementById("icon2"), Skycons.RAIN);

  // nếu đang sử dụng Forecast API, có thể cung cấp
  // strings: "partly-cloudy-day" hoặc "rain".

  // bắt đầu animation!
  skycons.play();

  // có thể hoãn/ngưng animation với skycons.pause()

  // thay đổi icon:
  skycons.set("icon1", Skycons.PARTLY_CLOUDY_NIGHT);

  // xoá icon:
  skycons.remove("icon2");
</script>
```

