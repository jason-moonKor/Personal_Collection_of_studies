const userIds = ["jason", "jay", "moon", "korea"];
const getRandomUserId = () => userIds[Math.round(Math.random())];

const msgs = Array(50) //배열50개의 칸을 만든다
	.fill(0) // .fill 을 하지 않으면 map을 빈배열에서 돌릴수없다.
	.map((_, i) => ({
		//맵의 index값만 쓴다
		id: i + 1,
		userUd: getRandomUserId(),
		timestamp: 1234567890123 + i * 1000 * 60, //시간정보에 + 1씩 추가하고 1000밀리세컨으로 곱하고 *60을 하면 분으로 바꾼다
		text: `${i + 1} mock data text`
	}));

// const msgs = [
//     {
//         id:1,
//         userId : getRandomUserId(),
//         timestamp : 1234567890123,
//         text:`1 mock data text`
//     },
//     {
//         id:2,
//         userId : getRandomUserId(),
//         timestamp : 1234567890124,
//         text:`2 mock data text`
//     },{
//         id:3,
//         userId : getRandomUserId(),
//         timestamp : 1234567890125,
//         text:`3 mock data text`
//     },{
//         id:4,
//         userId : getRandomUserId(),
//         timestamp : 1234567890126,
//         text:`4 mock data text`
//     }
// ]

const msgList = () => {
	<ul className="messages">
		{msgs.map((x) => (
			<MsgItem key={x.id} {...x} />
		))}
	</ul>;
};
