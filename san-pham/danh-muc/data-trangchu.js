// Dữ liệu danh sách sản phẩm trên trang chủ
const homeProducts = {
    // 1. Mẫu thiệp độc quyền
    docQuyen: [
{
        code: "HHY-6179",
        name: "In thiệp sinh nhật bé trai theo thiết kế HHY-6179",
        price: "2.500",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hhy6179-2433.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "In thiệp sinh nhật bé trai theo thiết kế"
    },
    {
        code: "HHY-6177",
        name: "Thiệp cưới giấy ánh kim cao cấp HHY-6177",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hhy6177-8040.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới giấy ánh kim cao cấp"
    },
    {
        code: "HHY-6176",
        name: "In thiệp chữ nhật Bé gái theo yêu cầu HHY-6176",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hhy6176-0877.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "In thiệp chữ nhật Bé gái theo yêu cầu"
    },
    {
        code: "HHY-6175",
        name: "Thiệp cưới giấy ánh kim thơm cao cấp HHY-6175",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hhy6175-7458.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới giấy ánh kim thơm cao cấp"
    },
    {
        code: "HHY-6174",
        name: "In thiệp cưới truyền thống HHY-6174",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hhy6174-2689.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "In thiệp cưới truyền thống"
    },
    {
        code: "HHY-6173",
        name: "In thiệp cưới theo thiết kế HHY-6173",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hhy6173-4380.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "In thiệp cưới theo thiết kế"
    },
    {
        code: "HHY-6172",
        name: "In thiệp cưới đỏ truyền thống theo yêu cầu HHY-6172",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hhy6172-7523.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "In thiệp cưới đỏ truyền thống theo yêu cầu"
    },
    {
        code: "HHY-6171",
        name: "In thiệp cưới giấy ánh kim thơm cao cấp HHY-6171",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hhy6171-9377.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "In thiệp cưới giấy ánh kim thơm cao cấp"
    },
    {
        code: "HHY-6170",
        name: "Thiệp cưới in kts HHY-6170",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hhy6170-7905.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in kts"
    },
    {
        code: "HHY-6169",
        name: "Thiệp cưới in theo yêu cầu HHY-6169 giấy ánh kim xoắn ốc",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hhy6169-2763.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in theo yêu cầu - Giấy ánh kim xoắn ốc"
    },
    {
        code: "HHY-6168",
        name: "Thiệp cưới độc quyền màu đỏ truyền thống HHY-6168",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6168-1648.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền màu đỏ truyền thống"
    },
    {
        code: "HHY-6167",
        name: "Thiết kế thiệp cưới giấy ánh kim thơm cao cấp HHY-6167",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6167-4548.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiết kế thiệp cưới giấy ánh kim thơm cao cấp"
    },
    {
        code: "HHY-6166",
        name: "Thiệp cưới thiết kế màu đỏ HHY-6166",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hhy6166-0832.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới thiết kế màu đỏ"
    },
    {
        code: "HHY-6165",
        name: "Thiệp tân gia thiết kế theo yêu cầu HHY-6165",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6165-1473.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp tân gia thiết kế theo yêu cầu"
    },
    {
        code: "HHY-6164",
        name: "Thiệp cưới thiết kế đơn giản HHY-6164",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hhy6164-0008.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới thiết kế đơn giản"
    },
    {
        code: "HHY-6163",
        name: "Thiệp cưới độc quyền HHY-6163 giấy draft",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/6163-1693.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền giấy draft"
    },
    {
        code: "HHY-6162",
        name: "Thiệp cưới độc quyền đỏ truyền thống HHY-6162",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hhy6159-7249.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền đỏ truyền thống"
    },
    {
        code: "HHY-6161",
        name: "In thiệp sinh nhật bé gái theo thiết kế HHY-6161",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hhy6161-1382.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "In thiệp sinh nhật bé gái theo thiết kế"
    },
    {
        code: "HHY-6160",
        name: "In thiệp cưới theo thiết kế HHY-6160 kem",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hhy6160-0025.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "In thiệp cưới theo thiết kế kem"
    },
    {
        code: "HHY-6159",
        name: "Thiệp cưới độc quyền HHY-6159 xanh",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hhy6159-4408.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền xanh"
    },
    {
        code: "HHY-6158K",
        name: "Thiệp cưới độc quyền HHY-6158 kem",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6158k-9497.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền kem"
    },
    {
        code: "HHY-6158D",
        name: "In thiệp cưới độc quyền HHY-6158 đỏ",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hhy6158d-3097.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "In thiệp cưới độc quyền đỏ"
    },
    {
        code: "HHY-6157",
        name: "Tự tạo thiệp cưới online HHY-6157",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6157-8954.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Tự tạo thiệp cưới online"
    },
    {
        code: "HHY-6156",
        name: "Thiệp cưới thiết kế online HHY-6156",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/6156-9010.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới thiết kế online"
    },
    {
        code: "HHY-6155",
        name: "Thiệp sinh nhật thiết kế miễn phí HHY-6155",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6155-4424.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp sinh nhật thiết kế miễn phí"
    },
    {
        code: "HHY-6154",
        name: "Thiệp cưới thiết kế miền tây HHY-6154",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6154-9895.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới thiết kế miền tây"
    },
    {
        code: "HHY-6153",
        name: "Thiệp cưới độc quyền giấy ánh kim thơm HHY-6153",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/web6153-1643.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền giấy ánh kim thơm"
    },
    {
        code: "HHY-6152",
        name: "Thiệp cưới hình vuông HHY-6152",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/web6152-4017.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới hình vuông"
    },
    {
        code: "HHY-6151",
        name: "Thiệp cưới hoa sen HHY-6151",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/web6151-9926.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới hoa sen"
    },
    {
        code: "HHY-6150",
        name: "Thiết kế thiệp cưới online miễn phí HHY-6150",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/web6150-0819.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiết kế thiệp cưới online miễn phí"
    },
    {
        code: "HHY-6149",
        name: "Thiệp cưới thiết kế online HHY-6149",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/web6149-7936.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới thiết kế online"
    },
    {
        code: "HHY-6148",
        name: "Tạo thiệp cưới online miễn phí HHY-6148",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/web6148-0034.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Tạo thiệp cưới online miễn phí"
    },
    {
        code: "HHY-6147",
        name: "Thiết kế thiệp cưới HHY-6147",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/web6147-0411.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiết kế thiệp cưới"
    },
    {
        code: "HHY-6146",
        name: "Thiệp cưới ánh kim thơm nhà trai HHY-6146",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/web6146hong-4214.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới ánh kim thơm nhà trai"
    },
    {
        code: "HHY-6146K",
        name: "Thiệp cưới độc quyền giấy thơm ánh kim HHY-6146 kem",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/web6146kem-5233.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền giấy thơm ánh kim kem"
    },
    {
        code: "HHY-6145",
        name: "Thiệp cưới đỏ độc quyền HHY-6145",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/web6145-2960.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới đỏ độc quyền"
    },
    {
        code: "HHY-6144",
        name: "Thiệp mời khai trương HHY-6144",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/webhhy6144-5273.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp mời khai trương"
    },
    {
        code: "HHY-6143",
        name: "Tạo thiệp cưới online miễn phí HHY-6143",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/webhhy6143-2217.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Tạo thiệp cưới online miễn phí"
    },
    {
        code: "HHY-6142",
        name: "Thiệp cưới màu hồng pastel HHY-6142",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6142-8919.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới màu hồng pastel"
    },
    {
        code: "HHY-6141",
        name: "Thiệp cưới màu xanh HHY-6141",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6141-2443.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới màu xanh"
    },
    {
        code: "HHY-6140X",
        name: "Mẫu thiệp cưới màu xanh HHY-6140X",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6140x-8937.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Mẫu thiệp cưới màu xanh"
    },
    {
        code: "HHY-6140H",
        name: "Thiệp cưới màu hồng HHY-6140H",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6140h---copy-4535.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới màu hồng"
    },
    {
        code: "HHY-6139",
        name: "Thiệp cưới thiết kế giấy ánh kim thơm HHY-6139",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/6139web-5692.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới thiết kế giấy ánh kim thơm"
    },
    {
        code: "HHY-6138",
        name: "Thiệp cưới màu đỏ đẹp HHY-6138",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/web6138-8319.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới màu đỏ đẹp"
    },
    {
        code: "HHY-6137",
        name: "Thiệp cưới màu xanh HHY-6137",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/web6137-3384.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới màu xanh"
    },
    {
        code: "HHY-6136",
        name: "Thiệp cưới độc quyền HHY-6136",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/web6136-7983.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-6135",
        name: "Mẫu thiệp cưới đẹp màu đỏ HHY-6135",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/goc6135.download-4112.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Mẫu thiệp cưới đẹp màu đỏ"
    },
    {
        code: "HHY-6134",
        name: "Mẫu thiệp giấy draft đẹp HHY-6134",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/goc6134-3446.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Mẫu thiệp giấy draft đẹp"
    },
    {
        code: "HHY-6133",
        name: "Thiệp cưới tiếng hoa HHY-6133",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/goc6133-5870.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới tiếng hoa"
    },
    {
        code: "HHY-6132",
        name: "Thiệp cưới in hình HHY-6132",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/goc6132-6661.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in hình"
    },
    {
        code: "HHY-6131",
        name: "Thiệp cưới thiết kế tiếng Hoa HHY-6131",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/goc6131-0776.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới thiết kế tiếng Hoa"
    },
    {
        code: "HHY-6130",
        name: "Thiệp Phúc gốc Hoa HHY-6130",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/goc6130-0534.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp Phúc gốc Hoa"
    },
    {
        code: "HHY-6129",
        name: "Thiệp cưới đỏ truyền thống HHY-6129",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/goc6129-5544.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới đỏ truyền thống"
    },
    {
        code: "HHY-6128",
        name: "Thiệp khai trương HHY-6128",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/goc6128-4721.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp khai trương"
    },
    {
        code: "HHY-6127",
        name: "Thiệp cưới truyền thống HHY-6127",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/goc6127-4293.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới truyền thống"
    },
    {
        code: "HHY-6126",
        name: "Thiệp cưới in nhanh KTS HHY-6126",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6126-4058.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6125",
        name: "Thiệp cưới độc quyền HHY-6125",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hinhweb-0072.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-6124",
        name: "Thiệp cưới độc quyền HHY-6124",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6124-7683.png",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-6123",
        name: "Thiệp cưới in nhanh KTS HHY-6123",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/6123-4641.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6122",
        name: "Thiệp cưới in nhanh KTS HHY-6122",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/6122-9757.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6121",
        name: "Thiệp cưới in nhanh KTS HHY-6121",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/web6121-0687.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6120",
        name: "Thiệp cưới in nhanh KTS HHY-6120",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6120-6531.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6119",
        name: "Thiệp cưới in nhanh KTS HHY-6119",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6119-7406.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6118",
        name: "Thiệp cưới in nhanh KTS HHY-6118",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6118-0514.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6117",
        name: "Thiệp cưới in nhanh KTS HHY-6117",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6117-7117.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6116",
        name: "Thiệp cưới in nhanh KTS HHY-6116",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/xemweb6116-3269.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6115",
        name: "Thiệp cưới in nhanh KTS HHY-6115",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/xemweb6115-8911.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6114",
        name: "Thiệp cưới in nhanh KTS HHY-6114",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6114-3375.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6113",
        name: "Thiệp cươi in nhanh KTS HHY-6113",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6113-8448.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6112",
        name: "Thiệp cưới in nhanh KTS HHY-6112",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6112-8354.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6111",
        name: "Thiệp cưới in nhanh KTS HHY-6111",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6111-3332.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6110",
        name: "Thiệp cưới in nhanh KTS HHY-6110",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/xemweb6110-3695.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6109",
        name: "Thiệp cưới in nhanh KTS HHY-6109",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/xemweb6109-8275.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6108",
        name: "Thiệp cưới in nhanh KTS HHY-6108",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/xemweb6108-3528.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6107",
        name: "Thiệp cưới in nhanh KTS HHY-6107",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/xemweb6107-0090.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6106",
        name: "Thiệp cưới in nhanh KTS HHY-6106",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/xemweb6106-9604.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6104",
        name: "Thiệp cưới in nhanh KTS HHY-6104",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/6104-9368.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6103",
        name: "Thiệp cưới in nhanh KTS HHY-6103",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/6103-7540.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6102",
        name: "Thiệp cưới in nhanh KTS HHY-6102",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hinhweb6102-6190.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6101",
        name: "Thiệp cưới in nhanh KTS HHY-6101",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6101-2536.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6100",
        name: "Thiệp cưới in nhanh KTS HHY-6100",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hinhweb6100-6176.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6099",
        name: "Thiệp cưới in nhanh KTS HHY-6099",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6099-0579.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6098",
        name: "Thiệp cưới in nhanh KTS HHY-6098",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/hinhweb6098-2659.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6097",
        name: "Thiệp cưới in nhanh KTS HHY-6097",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6097-4862.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6096",
        name: "Thiệp cưới in nhanh KTS HHY-6096",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts6096-6951.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6095",
        name: "Thiệp cưới in nhanh KTS HHY-6095",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/6095-1327.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6094",
        name: "Thiệp cưới độc quyền HHY-6094",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/6094-7209.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-6093",
        name: "Thiệp cưới in nhanh KTS HHY-6093",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/6093-6062.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6092",
        name: "Thiệp cưới in nhanh KTS HHY-6092",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/6092-2237.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6091",
        name: "Thiệp cưới in nhanh KTS HHY-6091",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/6091-3620.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6090",
        name: "Thiệp cưới in nhanh KTS HHY-6090",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/6090-3552.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6089",
        name: "Ảnh thiệp cưới HHY-6089",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/6089-3058.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Ảnh thiệp cưới"
    },
    {
        code: "HHY-6088",
        name: "Thiệp cưới độc quyền HHY-6088",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/6088-0106.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-6087",
        name: "Thiệp cưới độc quyền HHY-6087",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/dr6087-1648.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-6086",
        name: "Thiệp cưới in nhanh KTS HHY-6086",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/dr6086-0947.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6085",
        name: "Thiệp cưới in nhanh KTS HHY-6085",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/dr6085-3994.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6084",
        name: "Thiệp cưới in nhanh KTS HHY-6084",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/dr6084-8707.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6083",
        name: "Thiệp cưới in nhanh KTS HHY-6083",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/dr6083-7365.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6081",
        name: "Thiệp cưới in nhanh KTS HHY-6081",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/dr6081-7055.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in nhanh KTS"
    },
    {
        code: "HHY-6080",
        name: "Thiệp cưới độc quyền HHY-6080",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/dr6080-7214.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-614",
        name: "THIỆP CƯỚI ĐỘC QUYỀN HHY-614",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/c614-6573.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-613",
        name: "THIỆP CƯỚI ĐỘC QUYỀN HHY-613",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/c613-5380.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-612",
        name: "THIỆP CƯỚI ĐỘC QUYỀN HHY-612",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/c612-5846.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-611",
        name: "THIỆP CƯỚI ĐỘC QUYỀN HHY-611",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/c611-8598.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-610",
        name: "THIỆP CƯỚI ĐỘC QUYỀN HHY-610",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/c610-0977.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-609",
        name: "THIỆP CƯỚI ĐỘC QUYỀN HHY-609",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/c609-5856.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-608",
        name: "THIỆP CƯỚI ĐỘC QUYỀN HHY-608",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/dr608-4516.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-607",
        name: "THIỆP CƯỚI ĐỘC QUYỀN HHY-607",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/dr607-1156.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-606",
        name: "THIỆP CƯỚI ĐỘC QUYỀN HHY-606",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/dr606-4091.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-605",
        name: "THIỆP CƯỚI ĐỘC QUYỀN HHY-605",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/dr605-0000.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-604",
        name: "THIỆP CƯỚI ĐỘC QUYỀN HHY-604",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/dr604-4519.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-603",
        name: "THIỆP CƯỚI ĐỘC QUYỀN HHY-603",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/dr603-7895.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-602",
        name: "THIỆP CƯỚI ĐỘC QUYỀN HHY-602",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/dr602-6128.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-601",
        name: "THIỆP CƯỚI ĐỘC QUYỀN HHY-601",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/dr601-2422.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới độc quyền"
    },
    {
        code: "HHY-KTS002",
        name: "THIỆP CƯỚI IN HÌNH ĐỘC QUYỀN HHY-KTS002",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts002-0596.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in hình độc quyền"
    },
    {
        code: "HHY-KTS001",
        name: "THIỆP CƯỚI IN ĐỘC QUYỀN HÌNH DÂU RỂ HHY-KTS001",
        price: "Liên hệ",
        image: "https://thiepcuoihoanghaiyen.com/upload/sanpham/kts001-0510.jpg",
        detailUrl: "chi-tiet-doc-quyen.html",
        desc: "Thiệp cưới in độc quyền hình dâu rể"
    }

        // Khi có mẫu độc quyền mới, bạn chỉ cần copy 1 khối {} ở trên rồi dán xuống đây
    ],

    // 2. Mẫu thiệp hiện đại
    hienDai: [
        {
        code: "HHY-KTS-9101",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9101",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/O90SRyjR.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9102",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9102",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/NDLOsGtN.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9103",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9103",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/gcpCTEsb.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9105",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9105",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/JSnDLlLj.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9106",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9106",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/LBpPZKpx.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9107",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9107",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/tq1q0Cu9.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9109",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9109",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/VGKF5nnj.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9110",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9110",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/TjsTtKuE.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9111",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9111",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/5VEHPHyy.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9112",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9112",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/CY94eUvk.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9113",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9113",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/KGKPVwk2.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9114",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9114",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/alqfzCbD.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9115",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9115",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/jcaidvsn.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9116",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9116",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/10gXGFh2.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9117",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9117",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/RBjHc6h5.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9118",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9118",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/IH48EHiz.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9119",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9119",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/L0qK0Cv7.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9120",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9120",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/TqbOkCuG.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9121",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9121",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/DoMzfllH.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9122",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9122",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/gwtOP3wo.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9123",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9123",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/W8Px3bnL.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9124",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9124",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/I02PZcsH.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9125",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9125",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/VhpFpQWh.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9126",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9126",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/c33dlkj8.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9127",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9127",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/gu0Be8bv.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9128",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9128",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/wQguW9Ll.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9129",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9129",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/FjqQjflt.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9130",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9130",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/hx5YbvrF.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9131",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9131",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/CF0khPsN.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9132",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9132",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/GejOREXT.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9133",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9133",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/Cp6kPP1H.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9134",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9134",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/GUx8syQp.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9135",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9135",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/WEEurQSy.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9136",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9136",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/WR6pncz5.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9137",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9137",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/Xw4fQEBq.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9138",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9138",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/zctB6OMc.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9139",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9139",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/8bbgzmgB.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9140",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9140",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/p5hvXHuo.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9141",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9141",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/pWEW3LNw.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9142",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9142",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/H0JYwp0j.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9143",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9143",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/aQVH2bpM.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9144",
        name: "Mẫu thiệp kỹ thuật số HHY-KTS-9144",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/QBWL4ztu.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, 2 tờ lót, in 1 mặt"
    },
    {
        code: "HHY-KTS-9301",
        name: "Mẫu thiệp túi kỹ thuật số HHY-KTS-9301",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/1dkjnVs0.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, thiệp túi, in 2 mặt"
    },
    {
        code: "HHY-KTS-9302",
        name: "Mẫu thiệp túi kỹ thuật số HHY-KTS-9302",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/7BTG4g09.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, thiệp túi, in 2 mặt"
    },
    {
        code: "HHY-KTS-9303",
        name: "Mẫu thiệp túi kỹ thuật số HHY-KTS-9303",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/fmW5pE4h.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, thiệp túi, in 2 mặt"
    },
    {
        code: "HHY-KTS-9304",
        name: "Mẫu thiệp túi kỹ thuật số HHY-KTS-9304",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/ZrAbfKiq.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, thiệp túi, in 2 mặt"
    },
    {
        code: "HHY-KTS-9305",
        name: "Mẫu thiệp túi kỹ thuật số HHY-KTS-9305",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/hg3q2Kwb.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, thiệp túi, in 2 mặt"
    },
    {
        code: "HHY-KTS-9306",
        name: "Mẫu thiệp túi kỹ thuật số HHY-KTS-9306",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/J9M1knYN.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, thiệp túi, in 2 mặt"
    },
    {
        code: "HHY-KTS-9307",
        name: "Mẫu thiệp túi kỹ thuật số HHY-KTS-9307",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/iB9njxqp.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, thiệp túi, in 2 mặt"
    },
    {
        code: "HHY-KTS-9308",
        name: "Mẫu thiệp túi kỹ thuật số HHY-KTS-9308",
        price: "4.500 đ",
        image: "https://cdn.upanhlaylink.com/i/fj7ZgfOI.jpg",
        detailUrl: "chi-tiet-hien-dai.html",
        desc: "Giấy ánh kim thơm 200g, thiệp túi, in 2 mặt"
    }
],

    // 3. Mẫu thiệp truyền thống
    truyenThong: [
  {
        code: "HHY-9401",
        name: "Mẫu thiệp HHY-9401",
        price: "3.000 đ",
        image: "https://cdn.upanhlaylink.com/i/LA4ilurn.jpg",
        detailUrl: "chi-tiet-truyen-thong.html",
        desc: "Bao thư giấy fo150g-Lót đôi giấy fo210g"
    },
    {
        code: "HHY-9402",
        name: "Mẫu thiệp HHY-9402",
        price: "3.000 đ",
        image: "https://cdn.upanhlaylink.com/i/OxIkz6lG.jpg",
        detailUrl: "chi-tiet-truyen-thong.html",
        desc: "Bao thư giấy fo150g-Lót đôi giấy fo210gt"
    },
    {
        code: "HHY-9403",
        name: "Mẫu thiệp HHY-9403",
        price: "3.000 đ",
        image: "https://cdn.upanhlaylink.com/i/r7ai7rrI.jpg",
        detailUrl: "chi-tiet-truyen-thong.html",
        desc: "Bao thư giấy fo150g-Lót đôi giấy fo210g"
    },
    {
        code: "HHY-9404",
        name: "Mẫu thiệp HHY-9404",
        price: "3.000 đ",
        image: "https://cdn.upanhlaylink.com/i/MoqNfJpx.jpg",
        detailUrl: "chi-tiet-truyen-thong.html",
        desc: "Bao thư giấy fo150g-Lót đôi giấy fo210g"
    },
    {
        code: "HHY-9405",
        name: "Mẫu thiệp HHY-9405",
        price: "3.000 đ",
        image: "https://cdn.upanhlaylink.com/i/JLUCv7Ap.jpg",
        detailUrl: "chi-tiet-truyen-thong.html",
        desc: "Bao thư giấy fo150g-Lót đôi giấy fo210g"
    },
    {
        code: "HHY-9406",
        name: "Mẫu thiệp HHY-9406",
        price: "3.000 đ",
        image: "https://cdn.upanhlaylink.com/i/KiCqxfkA.jpg",
        detailUrl: "chi-tiet-truyen-thong.html",
        desc: "Bao thư giấy fo150g-Lót đôi giấy fo210g"
    },
    {
        code: "HHY-9407",
        name: "Mẫu thiệp HHY-9407",
        price: "3.000 đ",
        image: "https://cdn.upanhlaylink.com/i/ftElnjSD.jpg",
        detailUrl: "chi-tiet-truyen-thong.html",
        desc: "Bao thư giấy fo150g-Lót đôi giấy fo210g"
    },
    {
        code: "HHY-9408",
        name: "Mẫu thiệp HHY-9408",
        price: "3.000 đ",
        image: "https://cdn.upanhlaylink.com/i/LilV9pQE.jpg",
        detailUrl: "chi-tiet-truyen-thong.html",
        desc: "Bao thư giấy fo150g-Lót đôi giấy fo210g"
    },
    {
        code: "HHY-9409",
        name: "Mẫu thiệp HHY-9409",
        price: "3.000 đ",
        image: "https://cdn.upanhlaylink.com/i/SIYWXVZI.jpg",
        detailUrl: "chi-tiet-truyen-thong.html",
        desc: "Bao thư giấy fo150g-Lót đôi giấy fo210g"
    },
    {
        code: "HHY-9410",
        name: "Mẫu thiệp HHY-9410",
        price: "3.000 đ",
        image: "https://cdn.upanhlaylink.com/i/8txxkfQ9.jpg",
        detailUrl: "chi-tiet-truyen-thong.html",
        desc: "Bao thư giấy fo150g-Lót đôi giấy fo210g"
    },
    {
        code: "HHY-9411",
        name: "Mẫu thiệp HHY-9411",
        price: "3.000 đ",
        image: "https://cdn.upanhlaylink.com/i/b8KsaHnW.jpg",
        detailUrl: "chi-tiet-truyen-thong.html",
        desc: "Bao thư giấy fo150g-Lót đôi giấy fo210g"
    },
    {
        code: "HHY-9412",
        name: "Mẫu thiệp HHY-9412",
        price: "3.000 đ",
        image: "https://cdn.upanhlaylink.com/i/hec8lkka.jpg",
        detailUrl: "chi-tiet-truyen-thong.html",
        desc: "Bao thư giấy fo150g-Lót đôi giấy fo210g"
    },
    {
        code: "HHY-9413",
        name: "Mẫu thiệp HHY-9413",
        price: "3.000 đ",
        image: "https://cdn.upanhlaylink.com/i/LOQByDqD.jpg",
        detailUrl: "chi-tiet-truyen-thong.html",
        desc: "Bao thư giấy fo150g-Lót đôi giấy fo210gt"
    },
    {
        code: "HHY-9414",
        name: "Mẫu thiệp HHY-9414",
        price: "3.000 đ",
        image: "https://cdn.upanhlaylink.com/i/ydiNNdDV.jpg",
        detailUrl: "chi-tiet-truyen-thong.html",
        desc: "Bao thư giấy fo150g-Lót đôi giấy fo210g"
    },
    {
        code: "HHY-9415",
        name: "Mẫu thiệp HHY-9415",
        price: "3.000 đ",
        image: "https://cdn.upanhlaylink.com/i/OeoSJkHb.jpg",
        detailUrl: "chi-tiet-truyen-thong.html",
        desc: "Bao thư giấy fo150g-Lót đôi giấy fo210g"
    },
    {
        code: "HHY-9416",
        name: "Mẫu thiệp HHY-9416",
        price: "3.000 đ",
        image: "https://cdn.upanhlaylink.com/i/SV3xnGX1.jpg",
        detailUrl: "chi-tiet-truyen-thong.html",
        desc: "Bao thư giấy fo150g-Lót đôi giấy fo210g"
    },
    {
        code: "HHY-9417",
        name: "Mẫu thiệp HHY-9417",
        price: "3.000 đ",
        image: "https://cdn.upanhlaylink.com/i/sJ8rcN9W.jpg",
        detailUrl: "chi-tiet-truyen-thong.html",
        desc: "Bao thư giấy fo150g-Lót đôi giấy fo210g"
    }
    ]
};