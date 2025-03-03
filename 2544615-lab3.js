function getMusicTitlesByYear(tracks){
  var result= {};
  var all_titles = []
  if (typeof tracks != "object"){
    throw new Error("input is not an object!")
  }
  if(tracks.length ==0){
    throw new Error("input is empty!")
  }

  for (let i = 0; i<tracks.length;++i){
    let record = tracks[i];

    if (!record.title ||!record.year||!record.artist ){
      throw new Error("each record must have a title, artist and year!")
    }

    if(typeof record.year != 'number'){
      throw new Error("record year must be a number!")
    }
    let rec_title = record.title;
    let rec_artist = record.artist;
    let rec_year = record.year; 

    if(all_titles.includes(rec_title)){
      continue;
    }
    else{
      all_titles.push(rec_title)
    }

    if (rec_year in result){
      result[rec_year].push(rec_title)
      result[rec_year].sort();
    }
    else{
      result[parseInt(rec_year)] = [rec_title];
    }
  }
  return result;
}
const tracks = [
  { title: 'Blinding Lights', artist: 'The Weeknd', year: 2020 },
  { title: 'Levitating', artist: 'Dua Lipa', year: 2021 },
  { title: 'Save your tears', artist: 'The Weeknd', year: 2020 },
];

console.log(getMusicTitlesByYear(tracks));
module.exports=getMusicTitlesByYear;
