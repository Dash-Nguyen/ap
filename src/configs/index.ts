import headerImg from './../assets/images/header-img.png';
import banggia from './../assets/images/banggia.jpg';
import info from './../assets/images/info.jpg';

import pos1 from './../assets/images/position/position-1.jpg';
import pos2 from './../assets/images/position/position-1.jpg';
import pos3 from './../assets/images/position/position-1.jpg';
import pos4 from './../assets/images/position/position-1.jpg';
import pos5 from './../assets/images/position/position-1.jpg';
import pos6 from './../assets/images/position/position-1.jpg';

import ul1 from './../assets/images/ultilities/ul-1.jpg';
import ul2 from './../assets/images/ultilities/ul-2.jpg';
import ul3 from './../assets/images/ultilities/ul-3.png';
import ul4 from './../assets/images/ultilities/ul-4.jpg';
import ul5 from './../assets/images/ultilities/ul-5.jpg';

import matbang from './../assets/images/matbang.jpg';

import ap1 from './../assets/images/designs/ap-1.jpg';
import ap2 from './../assets/images/designs/ap-2.jpg';
import ap3 from './../assets/images/designs/ap-3.jpg';
import ap4 from './../assets/images/designs/ap-4.jpg';
import ap5 from './../assets/images/designs/ap-5.jpg';
import ap6 from './../assets/images/designs/ap-6.jpg';
import ap7 from './../assets/images/designs/ap-7.jpg';

const projectConfig = {
    name: 'Kane GREEN PARK',
    hotline: '094 214 2222',
    address: '30 Tô Hiệu, Trung Tâm Hành Chính Q.Hà Đông',
    website: 'https://www.facebook.com/tunz.1996/',
    map: '<iframe width="524" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=500&amp;height=300&amp;hl=en&amp;q=kangnam+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
}

const introConfig = {
    img: headerImg,
    highlights: {
        title: `${projectConfig.name}`,
        data: [
            [
                {
                    content: 'Hỗ trợ trả góp',
                },
                {
                    content: '0%',
                    hl: 'hl'
                },
                {
                    content: 'đến khi nhận nhà',
                }
            ],
            [
                {
                    content: 'Chiết khấu ngay',
                },
                {
                    content: '4%',
                    hl: 'hl'
                },
                {
                    content: 'khi không nhận hỗ trợ lãi suất vay',
                }
            ]
            ,
            [
                {
                    content: 'Chiết khấu',
                },
                {
                    content: '4%',
                    hl: 'hl'
                },
                {
                    content: 'khi thanh toán sớm 95%',
                }
            ]
        ]
    },
    new: [
        [
            {
                content: 'Căn 2 ngủ giá 1.6 tỷ tặng',
            },
            {
                content: '1 CHỈ VÀNG',
                hl: 'hl'
            }
        ],
        [
            {
                content: 'Căn 2 ngủ + 1 giá 1.8 tỷ tặng',
            },
            {
                content: '5 CHỈ VÀNG',
                hl: 'hl'
            }
        ]
        ,
        [
            {
                content: 'Căn 3 ngủ giá 2.2 tỷ tặng',
            },
            {
                content: '5 CHỈ VÀNG',
                hl: 'hl'
            }
        ]
    ],
    price: {
        img: banggia,
        url: 'https://www.facebook.com/tunz.1996/'
    }
}

const infoConfig = {
    img: info,
    highlights: [
        [{
            content: 'CHỦ ĐẦU TƯ:',
            hl: 'green-bold'
        },
        {
            content: 'Công ty CP Đầu tư và Thương Mại Phú Thịnh',
        }
        ],
        [
            {
                content: 'ĐỊA CHỈ:',
                hl: 'green-bold'
            },
            {
                content: ' Trung tâm hành chính quận Hà Đông - P. Hà Cầu, Q. Hà Đông, Hà Nội',

            }
        ],
        [
            {
                content: 'DIỆN TÍCH:',
                hl: 'green-bold'
            },
            {
                content: '4.180 m2',

            }
        ],
        [
            {
                content: 'QUY MÔ:',
                hl: 'green-bold'
            },
            {
                content: '532',

            }
        ],
        [
            {
                content: 'TỔNG CĂN HỘ:',
                hl: 'green-bold'
            },
            {
                content: ' Trung tâm hành chính quận Hà Đông - P. Hà Cầu, Q. Hà Đông, Hà Nội',

            }
        ],
        [
            {
                content: 'KHU VỰC ĐỂ XE:',
                hl: 'green-bold'
            },
            {
                content: 'Tầng hầm & tầng 3,4',

            }
        ],
        [
            {
                content: 'DIỆN TÍCH CĂN HỘ:',
                hl: 'green-bold'
            },
            {
                content: '61-97 m2',

            }
        ],
        [
            {
                content: 'HÌNH THỨC SỞ HỮU: ',
                hl: 'green-bold'
            },
            {
                content: 'Sổ đỏ lâu dài',
                hl: 'hl'

            }
        ]
    ]
}

const positionConfig = {
    title: 'VỊ TRÍ TRUNG TÂM HÀ ĐÔNG',
    img360s: [
        'https://app.cloudpano.com/tours/C-UJGI7U1e'
    ],
    highlights: [
        {
            img: pos1,
            title: 'NGAY CẠNH CÔNG VIÊN THỂ THAO 120HA'
        },
        {
            img: pos2,
            title: 'NGAY CẠNH SIÊU THỊ METRO HÀ ĐÔNG'
        },
        {
            img: pos3,
            title: 'NGAY CẠNH QUẬN ỦY HÀ ĐÔNG'
        }, {
            img: pos4,
            title: '200M NHÀ THI ĐẤU HÀ ĐÔNG'
        },
        {
            img: pos5,
            title: '400M CHỢ HÀ ĐÔNG'
        },
        {
            img: pos6,
            title: '300M KHU ĐÔ THỊ VĂN PHÚ'
        }
    ]
}

const utilityConfig = {
    title: 'TIỆN ÍCH DỰ ÁN',
    highlights: [
        {
            img: ul1,
            title: 'TRUNG TÂM THƯƠNG MẠI'
        },
        {
            img: ul2,
            title: 'BỂ BƠI'
        },
        {
            img: ul3,
            title: 'VƯỜN DẠO BỘ'
        },
        {
            img: ul4,
            title: 'SẢNH CHUNG CƯ'
        },
        {
            img: ul5,
            title: 'PHÒNG TẬP GYM'
        }
    ]
}


const designConfig = {
    img: matbang,
    highlights: [
        {
            img: ap1,
            title: '64m2 - 2 phòng ngủ',
            price: '1.6 tỷ',
            descriptions: [
                'Mẫu căn hộ: 05-14A',
                'Vị trí tầng: 7→36',
                'Tổng số lượng căn: 60',
                'Diện tích thông thủy: 64.5m2'
            ],
            url: 'https://www.facebook.com/tunz.1996/'
        },
        {
            img: ap2,
            title: '66m2 - 2 phòng ngủ',
            price: '1.6 tỷ',
            descriptions: [
                'Mẫu căn hộ: 01-17A',
                'Vị trí tầng: 7→36',
                'Tổng số lượng căn: 60',
                'Diện tích thông thủy: 66.4m2'
            ],
            url: 'https://www.facebook.com/tunz.1996/'
        },
        {
            img: ap3,
            title: '82m2 - 2 + 1 phòng ngủ',
            price: '2 tỷ',
            descriptions: [
                'Mẫu căn hộ: 02-07-11-16',
                'Vị trí tầng: 7→36',
                'Tổng số lượng căn: 116',
                'Diện tích thông thủy: 82.5m2'
            ],
            url: 'https://www.facebook.com/tunz.1996/'
        },
        {
            img: ap4,
            title: '83m2 - 2+1 phòng ngủ',
            price: '2 tỷ',
            descriptions: [
                'Mẫu căn hộ: 03-06-12-15',
                'Vị trí tầng: 7→36',
                'Tổng số lượng căn: 120',
                'Diện tích thông thủy: 83.1m2'
            ],
            url: 'https://www.facebook.com/tunz.1996/'
        },
        {
            img: ap4,
            title: '83m2 - 2+1 phòng ngủ',
            price: '2 tỷ',
            descriptions: [
                'Mẫu căn hộ: 03-06-12-15',
                'Vị trí tầng: 7→36',
                'Tổng số lượng căn: 120',
                'Diện tích thông thủy: 83.1m2'
            ],
            url: 'https://www.facebook.com/tunz.1996/'
        },
        {
            img: ap5,
            title: '83m2 - 2+1 phòng ngủ',
            price: '2 tỷ',
            descriptions: [
                'Mẫu căn hộ: 03-06-12-15',
                'Vị trí tầng: 7→36',
                'Tổng số lượng căn: 120',
                'Diện tích thông thủy: 83.1m2'
            ],
            url: 'https://www.facebook.com/tunz.1996/'
        },
        {
            img: ap6,
            title: '83m2 - 2+1 phòng ngủ',
            price: '2 tỷ',
            descriptions: [
                'Mẫu căn hộ: 03-06-12-15',
                'Vị trí tầng: 7→36',
                'Tổng số lượng căn: 120',
                'Diện tích thông thủy: 83.1m2'
            ],
            url: 'https://www.facebook.com/tunz.1996/'
        },
        {
            img: ap7,
            title: '83m2 - 2+1 phòng ngủ',
            price: '2 tỷ',
            descriptions: [
                'Mẫu căn hộ: 03-06-12-15',
                'Vị trí tầng: 7→36',
                'Tổng số lượng căn: 120',
                'Diện tích thông thủy: 83.1m2'
            ],
            url: 'https://www.facebook.com/tunz.1996/'
        }
    ]
}

const mediaConfig = {
    title: 'VIDEO CĂN HỘ',
    highlights: [
        {
            title: 'CĂN HỘ 04, 05, 14A, 14B | 2 PHÒNG NGỦ',
            url: 'https://www.youtube.com/embed/tgbNymZ7vqY'
        },
        {
            title: 'CĂN HỘ 06 | 2 PHÒNG NGỦ',
            url: 'https://www.youtube.com/embed/tgbNymZ7vqY'
        }
    ]
}

export {
    introConfig,
    projectConfig,
    infoConfig,
    positionConfig,
    utilityConfig,
    designConfig,
    mediaConfig
}
