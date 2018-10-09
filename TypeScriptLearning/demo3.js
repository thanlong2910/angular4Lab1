// OOP
console.log("-- Huong doi tuong -- ");
var Hocsinh = /** @class */ (function () {
    function Hocsinh(maso, hoten, namsinh, tien) {
        this.maso = maso;
        this.hoten = hoten;
        this.namsinh = namsinh;
        this.setTien(tien);
    }
    Hocsinh.prototype.setTien = function (tien) {
        if (tien <= 0) {
            console.log("Nhap lai, tien phai > 0");
        }
        else
            this.tien = tien;
    };
    Hocsinh.prototype.getTien = function () {
        return this.tien;
    };
    return Hocsinh;
}());
// var teo:Hocsinh = new Hocsinh();
// teo.maso = "HS001";
// teo.hoten = "Nguyen Van Teo";
// teo.namsinh = 1993;
var teo = new Hocsinh("HS001", "Nguyen Van Teo", 1993, -1000);
console.log(teo.maso);
console.log(teo.hoten);
console.log(teo.namsinh);
console.log(teo.getTien());
