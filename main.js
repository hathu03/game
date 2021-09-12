const TIME = 30;
const QUESTION = [
    {
        question: "Lịch nào dài nhất?",
        answer: {
            A: " Lịch vạn niên ",
            B: " Lịch sử ",
            C: " Lịch tháng ",
            D: " Lịch năm "
        },
        correct: "B"
    },{
        question: "Mèo gì sợ chuột nhất",
        answer: {
            A: "Mèo hoang",
            B: "Mèo kitty",
            C: "Mèo doraemon",
            D: "Mèo mướp"
        },
        correct: "C"
    },{
        question: "Một thằng mù đi du lịch ở Bắc Cực.Hỏi thằng mù ấy thấy gì?",
        answer: {
            A: "Thấy gấu Bắc Cực",
            B: "Thấy băng",
            C: "Thấy toàn màu đen",
            D: "Thấy lạnh"
        },
        correct: "D"
    },{
        question: "Có con cừu bị cột vào một sợi dây dài 3 mét, trước mặt con cừu 5 mét có bụi cỏ. Hỏi làm sao con cừu ăn được cỏ",
        answer: {
            A: "Cứ ra đấy ăn thôi",
            B: "Cắn sợi dây",
            C: "Nó đang no",
            D: "Cừu không ăn cỏ"
        },
        correct: "A"
    },{
        question: "Trên cành cây có một con chim, hai con chim bay đến, sau đó có 96 con chim nữa bay đến. Hỏi trên cành cây có bao nhiêu con chim?",
        answer: {
            A: "3 con",
            B: "1 con",
            C: "69 con",
            D: "99 con"
        },
        correct: "B"
    },{
        question: "Ngựa vằn màu đen sọc trắng hay màu trắng sọc đen?",
        answer: {
            A: "Trắng sọc đen",
            B: "Đen sọc trắng",
            C: "Trắng đen lẫn lộn",
            D: "Tất cả đều đúng"
        },
        correct: "D"
    },{
        question: "Một ông già đi vào rừng gặp nải chuối đỏ. Hỏi tại sao ông tại đi về? ",
        answer: {
            A: "Bị chó đuổi",
            B: "Ông thấy mệt",
            C: "Thấy ma",
            D: "Bị cướp nên chạy"
        },
        correct: "A"
    },{
        question: "Trời âm u, gió hù hù, có 3 ông mù vào vườn cao su, hỏi ông nào bị ướt??",
        answer: {
            A: "Ông thứ ba",
            B: "Ông thứ nhất",
            C: "Ông thứ hai",
            D: "Không ông nào"
        },
        correct: "D"
    },{
        question: "Ban đêm đóng cửa then cài, ban ngày mở cửa nhìn đời đổi thay. Là cái gì?",
        answer: {
            A: "Cánh của sổ",
            B: "Cổng trường",
            C: "Con đường",
            D: "Con mắt"
        },
        correct: "D"
    },{
        question: "Một bé gái đi trước, ba bé gái đi sau hỏi có mấy bé gái?",
        answer: {
            A: "Một bé gái",
            B: "Ba bé gái",
            C: "Bốn bé gái",
            D: "Hai bé gái"
        },
        correct: "A"
    },{
        question: "Tháng nào có 28 ngày?",
        answer: {
            A: "Tháng 2",
            B: "Tháng 3",
            C: "Không có tháng nào",
            D: "Tháng nào cũng có"
        },
        correct: "D"
    },{
        question: "Anh của XUân có 2 người em trai, anh cả tên là Phúc, em kế tên Lộc. Hỏi thằng em út tên gì? ",
        answer: {
            A: "Lộc",
            B: "Xuân ",
            C: "Thọ",
            D: "Phát"
        },
        correct: "B"
    }

]

let Game = function () {
    this._color = '#3498db';
    this._selectArray = [];
    this.time = TIME;
    this._number5050 = 0;
    this._keep = 0;
    let self = this;
}

this.startGame = function () {
    this.level = 0


}