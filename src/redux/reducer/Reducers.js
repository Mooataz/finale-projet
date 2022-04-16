import { ADD, MODIF } from "../actions/Action-type"

const initdata={
    model:[
        { id:1,
            modele:'Vivo_V23',
            pcba:420,
            block:360,
            sub:80,
            battery:90,
            src:'https://aatifblog.com/vivo-v23-pro-review-in-hindi/',
            srcimg:'https://aatifblog.com/wp-content/uploads/2021/07/oCDQJVT-44g-HD.jpg'
        },
        { id:2,
        modele:'Infinix_Hote 11',
        pcba:300,
        block:200,
        sub:30,
        battery:50,
        src:'https://www.infinixmobility.com/smartphone/hot-11s?msclkid=25bb8752b52511ec8e91e7942f3a0e30',
        srcimg:'https://specificationsplus.com/wp-content/uploads/2020/08/Infinix-Hot-11-600x600.jpg'
       },
       { id:3,
        modele:'Oppo_Reno5',
        pcba:400,
        block:350,
        sub:50,
        battery:80,
        src:'https://www.oppo.com/tn/smartphones/series-reno/reno5-5g/',
        srcimg:'https://th.bing.com/th/id/OIP.EHJEr7nFQdPTYdPgg3gF3AHaEp?pid=ImgDet&rs=1'
       },
       { id:4,
        modele:'Infinix_Note 10',
        pcba:250,
        block:100,
        sub:50,
        battery:40,
        src:'https://www.carlcare.com/global/tips-detail/infinix-new-phones-2021/',
        srcimg:'https://th.bing.com/th/id/OIP.heCxK8cOPg2WTWUCchyoKQHaHa?pid=ImgDet&w=1024&h=1024&rs=1'
       },
       { id:5,
        modele:'Oppo_A74',
        pcba:400,
        block:450,
        sub:60,
        battery:64,
        src:'https://www.oppo.com/tn/smartphones/series-a/a74/',
        srcimg:'https://th.bing.com/th/id/OIP._rrRl943VjMNbN7f6jtB-QHaFj?pid=ImgDet&rs=1'
       },
       { id:6,
        modele:'Infinix_Smart 6',
        pcba:400,
        block:30,
        sub:10,
        battery:100,
        src:'https://www.infinixmobility.com/smartphone/smart-6?msclkid=6552ffa2b52511ec8698568d57ab6d6e',
        srcimg:'https://www.gizmochina.com/wp-content/uploads/2020/07/Infinix-Smart-4-Plus-.jpg'
       }
    ]

}

export const reducerms =(state=initdata,action)=>{
    switch(action.type){
        case ADD: return {...state, model:[...state.model,action.payload]}
        case MODIF: return {...state,model:action.payload }
        default: return state
    }
}
