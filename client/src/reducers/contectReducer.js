const initialState = {
    contects: [],
    contact:null
   };
   
   export const contactReducer = (state = initialState, action) => {
     switch (action.type) {
      case "FETCH_ALL":
        
        return {
            ...state,
            contects: [...action.payload.data]
        };
       case "CREATE_CONTACT" : 
         return {
           ...state,
           contects:[action.payload.Conatcts,...state.contects]
         };

         //get single data for edit
         case "GET_CONTACT" : 
         let arr = state.contects.filter((contact) => contact.id == action.payload);
          arr = arr.values();
         for(let val of arr){
           arr = val;
         }
        console.log(action.payload)
         return {
           ...state,
           contact: arr
         };
         //update contact 
         case "UPDATE_CONTACT" : 
         return {
           ...state,
           contects:state.contects.map(contact => contact._id == action.payload._id ? action.payload : contact)
         };
         //delete contact 
         case "DELETE_CONTACT" : 
         console.log(action.payload)
         return {
           ...state,
           contects:state.contects.filter(contact => contact._id != action.payload)
         };
         //default
       default:
         return state;
     }
   }