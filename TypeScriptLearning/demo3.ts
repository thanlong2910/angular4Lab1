// OOP
console.log("-- Huong doi tuong -- ");

class Hocsinh{
    maso:string;
    hoten:string;
    namsinh:number;
    private tien:number;

    constructor(maso:string, hoten:string, namsinh:number, tien:number){
        this.maso = maso;
        this.hoten = hoten;
        this.namsinh = namsinh;
        this.setTien(tien);
    }

    setTien(tien:number){
        if (tien<=0) {
            console.log("Nhap lai, tien phai > 0");
        }
        else this.tien = tien;
    }

    getTien(){
        return this.tien;
    }
}

// var teo:Hocsinh = new Hocsinh();
// teo.maso = "HS001";
// teo.hoten = "Nguyen Van Teo";
// teo.namsinh = 1993;

var teo:Hocsinh = new Hocsinh("HS001","Nguyen Van Teo",1993,-1000);
console.log(teo.maso);
console.log(teo.hoten);
console.log(teo.namsinh);
console.log(teo.getTien());
