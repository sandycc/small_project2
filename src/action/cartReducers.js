import item from '../../images/item';
import action from './action';
const initState = {
    items: [
        {id:1,title:'the miror and the light by hillary mantel', desc: "If you cannot speak truth at a beheading, when can you speak it With The Mirror & the Light, Hilary Mantel brings to a triumphant close the trilogy she began with her peerless, Booker Prize-winning novels, Wolf Hall and Bring Up the Bodies. She traces the final years of Thomas Cromwell, the boy from nowhere who climbs to the heights of power, offering a defining portrait of predator and prey, of a ferocious contest between present and past, between royal will and a common man’s vision: of a modern nation making itself through conflict, passion and courage.The story begins in May 1536: Anne Boleyn is dead, decapitated in the space of a heartbeat by a hired French executioner. As her remains are bundled into oblivion, Cromwell breakfasts with the victors. The blacksmith’s son from Putney emerges from the spring’s bloodbath to continue his climb to power and wealth, while his formidable master, Henry VIII, settles to short-lived happiness with his third queen, Jane Seymour.Cromwell, a man with only his wits to rely on, has no great family to back him, no private army. Despite rebellion at home, traitors plotting abroad and the threat of invasion testing Henry’s regime to the breaking point, Cromwell’s robust imagination sees a new country in the mirror of the future. All of England lies at his feet, ripe for innovation and religious reform. But as fortune’s wheel turns, Cromwell’s enemies are gathering in the shadows. The inevitable question remains: how long can anyone survive under Henry’s cruel and capricious gaze?Eagerly awaited and eight years in the making, The Mirror & the Light completes Cromwell’s journey from self-made man to one of the most feared, influential figures of his time. Portrayed by Mantel with pathos and terrific energy, Cromwell is as complex as he is unforgettable: a politician and a fixer, a husband and a father, a man who both defied and defined his age", price:150.000,img:item},

    ],
    addItems:[],
    total:0
}
const cartReducer= (state = initState,action) => {
    return state;
}
export default cartReducer;