module.exports = function check(str, bracketsConfig) {
  let br = '[](){}';
	let st = [];
	
	for(let i = 0; i < str.length; i++){
	  let ch = str[i];
	  let ind = br.indexOf(ch);
	  if(ind >= 0){
	    if(ind & 1){
		  if(!st.length) return false;
		  let lastBr = st.pop();
		  if(lastBr != br[ind - 1]) return false;
		} else {
	      st.push(ch);
	    }
	  }
	}
	return !st.length;
}
