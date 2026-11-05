// Dữ liệu danh mục Thiệp Cưới Hiện Đại (Dùng chung cho trang chi tiết)
const Dq25products = [
  { img: "https://ducquyencards.com/upload/images/2025/04/1744362329-DQ25A14Offsetcopy.jpg", 
            name: "DQ-25A14 Offset", 
            price: "2.500 đ", 
            desc: "Bao thư giấy fo150g, in 2 mặt - Lót đôi giấy fo210g, in 2 mặt" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744362699-DQ25A15Offsetcopy.jpg", 
            name: "DQ-25A15 Offset", 
            price: "3.500 đ", 
            desc: "Bao thư giấy fo150g - Lót đôi giấy fo210g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744362778-DQ25A16Offsetcopy.jpg", 
            name: "DQ-25A16 Offset", 
            price: "3.500 đ", 
            desc: "Bao thư giấy fo150g - Lót đôi giấy fo210g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744362854-DQ25A17Offsetscopy.jpg", 
            name: "DQ-25A17 Offset", 
            price: "3.500 đ", 
            desc: "Bao thư giấy fo150g - Lót đôi giấy fo210g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744362933-DQ25A18Offsetcopy.jpg", 
            name: "DQ-25A18 Offset", 
            price: "3.500 đ", 
            desc: "Bao thư giấy fo150g - Lót đôi giấy fo210g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744363004-DQ25A19Offsetcopy.jpg", 
            name: "DQ-25A19 Offset", 
            price: "3.500 đ", 
            desc: "Bao thư giấy fo150g - Lót đôi giấy fo210g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744363080-DQ25A20Offsetcopy.jpg", 
            name: "DQ-25A20 Offset", 
            price: "3.500 đ", 
            desc: "Bao thư giấy fo150g - Lót đôi giấy fo210g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744363156-DQ25A21Offsetcopy.jpg", 
            name: "DQ-25A21 Offset", 
            price: "3.500 đ", 
            desc: "Bao thư giấy fo150g - Lót đôi giấy fo210g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744363235-DQ25A22Offsetcopy.jpg", 
            name: "DQ-25A22 Offset", 
            price: "2.500 đ", 
            desc: "Bao thư giấy fo150g, in 2 mặt - Lót đôi giấy fo210g, in 2 mặt" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744363325-DQ25A24Anhkimthom2Mcopy.jpg", 
            name: "DQ-25A24 Ánh Kim Thơm 2M", 
            price: "3.500 đ", 
            desc: "Bao thư giấy ánh kim thơm 2M 150g - Lót đôi giấy ánh kim thơm 2M 190g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744363489-DQ25A25Anhkimthom2Mcopy.jpg", 
            name: "DQ-25A25 Ánh Kim Thơm 2M", 
            price: "3.500 đ", 
            desc: "Bao thư giấy ánh kim thơm 2M 150g - Lót đôi giấy ánh kim thơm 2M 190g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744363576-DQ25A26Anhkimthom2Mcopy.jpg", 
            name: "DQ-25A26 Ánh Kim Thơm 2M", 
            price: "3.500 đ", 
            desc: "Bao thư giấy ánh kim thơm 2M 150g - Lót đôi giấy ánh kim thơm 2M 190g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744363667-DQ25A27Anhkimthom2Mcopy.jpg",
             name: "DQ-25A27 Ánh Kim Thơm 2M", 
             price: "3.500 đ", 
             desc: "Bao thư giấy ánh kim thơm 2M 150g - Lót đôi giấy ánh kim thơm 2M 190g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744363730-DQ25A28Anhkimthom2Mcopy.jpg", 
            name: "DQ-25A28 Ánh Kim Thơm 2M", 
            price: "3.500 đ", 
            desc: "Bao thư giấy ánh kim thơm 2M 150g - Lót đôi giấy ánh kim thơm 2M 190g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744363789-DQ25A29Anhkimthom2Mcopy.jpg", 
            name: "DQ-25A29 Ánh Kim Thơm 2M", 
            price: "3.500 đ", 
            desc: "Bao thư giấy ánh kim thơm 2M 150g - Lót đôi giấy ánh kim thơm 2M 190g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744363863-DQ25A30Anhkimthom2Mcopy.jpg", 
            name: "DQ-25A30 Ánh Kim Thơm 2M", 
            price: "3.500 đ", 
            desc: "Bao thư giấy ánh kim thơm 2M 150g - Lót đôi giấy ánh kim thơm 2M 190g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744363930-DQ25A31Anhkimthom2Mcopy.jpg", 
            name: "DQ-25A31 Ánh Kim Thơm 2M", 
            price: "2.500 đ", 
            desc: "Bao thư giấy ánh kim thơm 2M 150g - Lót đôi giấy ánh kim thơm 2M 190g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744364003-DQ25A32Anhkimthom2Mcopy.jpg", 
            name: "DQ-25A32 Ánh Kim Thơm 2M", 
            price: "3.500 đ", 
            desc: "Bao thư giấy fo150g - Lót đôi giấy fo210g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744364097-DQ25A34Anhkimthom2Mcopy.jpg", 
            name: "DQ-25A34 Ánh Kim Thơm 2M", 
            price: "3.500 đ", 
            desc: "Bao thư giấy ánh kim thơm 2M 150g - Lót đôi giấy ánh kim thơm 2M 190g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744364179-DQ25A35Anhkimthom2Mcopy.jpg", 
            name: "DQ-25A35 Ánh Kim Thơm 2M", 
            price: "3.500 đ", 
            desc: "Bao thư giấy ánh kim thơm 2M 150g - Lót đôi giấy ánh kim thơm 2M 190g" },

            /*-----TRANG 02-------*/

            { img: "https://ducquyencards.com/upload/images/2025/04/1744364240-DQ25A38Anhkimthom2Mcopy.jpg", 
            name: "DQ-25A38 Ánh Kim Thơm 2M", 
            price: "3.500 đ", 
            desc: "Bao thư giấy ánh kim thơm 2M 150g - Lót đôi giấy ánh kim thơm 2M 190g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744364329-DQ25A39Anhkimthom2Mcopy.jpg", 
            name: "DQ-25A39 Ánh Kim Thơm 2M", 
            price: "3.500 đ", 
            desc: "Bao thư giấy ánh kim thơm 2M 150g - Lót đôi giấy ánh kim thơm 2M 190g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744364640-DQ25A42Thieptuioffsetcopy.jpg", 
            name: "DQ-25A42 Thiệp túi Offset", 
            price: "3.500 đ", 
            desc: "Thiệp túi giấy Fo150g, In 2 mặt" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744364718-DQ25A43Thieptuioffsetcopy.jpg", 
            name: "DQ-25A43 Thiệp túi Offset", 
            price: "3.500 đ", 
            desc: "Thiệp túi giấy Fo150g, In 2 mặt" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744364757-DQ25A44Thieptuioffsetcopy.jpg", 
            name: "DQ-25A44 Thiệp túi Offset", 
            price: "2.500 đ", 
            desc: "Thiệp túi giấy Fo150g, In 2 mặt" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744364989-DQ25A45Thieptuioffsetcopy.jpg", 
            name: "DQ-25A45 Thiệp túi Offset", 
            price: "3.500 đ", 
            desc: "Thiệp túi giấy Fo150g, In 2 mặt" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744365064-46ThieptuiAnhkimthom2Mcopy.jpg", 
            name: "DQ-25A46 Thiệp túi Ánh kim thơm 2M", 
            price: "3.500 đ", 
            desc: "Thiệp túi giấy Ánh kim thơm 2M 150g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744365136-47ThieptuiAnhkimthom2Mcopy.jpg", 
            name: "DQ-25A47 Thiệp túi Ánh kim thơm 2M", 
            price: "3.500 đ", 
            desc: "Thiệp túi giấy Ánh kim thơm 2M 150g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744365166-48ThieptuiAnhkimthom2Mcopy.jpg", 
            name: "DQ-25A48 Thiệp túi Ánh kim thơm 2M", 
            price: "3.500 đ", 
            desc: "Thiệp túi giấy Ánh kim thơm 2M 150g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744365202-49ThieptuiAnhkimthom2Mcopy.jpg", 
            name: "DQ-25A49 Thiệp túi Ánh kim thơm 2M", 
            price: "3.500 đ", 
            desc: "Thiệp túi giấy Ánh kim thơm 2M 150g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744365225-50ThieptuiAnhkimthom2Mcopy.jpg", 
            name: "DQ-25A50 Thiệp túi Ánh kim thơm 2M", 
            price: "3.500 đ", 
            desc: "Thiệp túi giấy Ánh kim thơm 2M 150g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744365252-51ThieptuiAnhkimthom2Mcopy.jpg", 
            name: "DQ-25A51 Thiệp túi Ánh kim thơm 2M", 
            price: "3.500 đ", 
            desc: "Thiệp túi giấy Ánh kim thơm 2M 150g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744365275-52ThieptuiAnhkimthom2Mcopy.jpg", 
            name: "DQ-25A52 Thiệp túi Ánh kim thơm 2M", 
            price: "3.500 đ", 
            desc: "Thiệp túi giấy Ánh kim thơm 2M 150g" },

            { img: "https://ducquyencards.com/upload/images/2025/04/1744365297-53ThieptuiAnhkimthom2Mcopy.jpg", 
            name: "DQ-25A53 Thiệp túi Ánh kim thơm 2M", 
            price: "3.500 đ", 
            desc: "Thiệp túi giấy Ánh kim thơm 2M 150g" }
        ];