var corpus = [
  {string:"This room, the one in which", first:"adjective", last:"pronoun"}, 
  {string:"I spend", first:"pronoun", last:"sob"}, 
  {string:"my sleeping hours", first:"pronoun", last:"noun"}, 
  {string:"is not the", first:"sob", last:"article"},
  {string:"safe place", first:"adjective", last:"noun"}, 
  {string:"for thought", first:"conjunction", last:"noun"},
  {string: "and calm", first:"conjunction", last:"adjective"}, 
  {string:"that I once thought", first:"pronoun", last:"noun"}, 
  {string:"it was", first:"pronoun", last:"sob"},
  {string:"unfortunately, it seems", first:"adverb", last:"sob"}, 
  {string:"now that I have", first:"conjunction", last:"verb"},
  {string:"been sharing my", first:"verb", last:"pronoun"}, 
  {string:"quiet space", first:"adverb", last:"noun"}, 
  {string:"with something else", first:"preposition", last:"adjective"}, 
  {string:"- and for quite a while", first:"conjunction", last:"noun"}, 
  {string:"something that", first:"pronoun", last:"adjective"}, 
  {string:"something that", first:"pronoun", last:"adjective"}, 
  {string:"moves along", first:"verb", last:"preposition"}, 
  {string:"the ground", first:"article", last:"noun"}, 
  {string:"that waits for", first:"adjective", last:"conjunction"}, 
  {string:"the perfect moment", first:"article", last:"conjunction"}, 
  {string:"to lie", first:"preposition", last:"noun"}, 
  {string:"to me.", first:"preposition", last:"fs"}, 
  {string:"I don't see it,", first:"pronoun", last:"pronoun"}, 
  {string:"not with my eyes,",first:"adverb", last:"noun"}, 
  {string:"but with something else.", first:"conjunction", last:"fs"}, 
  {string:"I know", first:"pronoun", last:"verb"}, 
  {string:"I’m sure", first:"pronoun", last:"adjective"}, 
  {string:"that I know,", first:"adjective", last:"verb"}, 
  {string:"what I don’t know",first:"pronoun", last:"verb"}, 
  {string:"now", first:"adverb", last:"adverb"}, 
  {string:"but it is", first:"conjunction", last:"verb"}, 
  {string:"too late for that", first:"adverb", last:"adjective"}, 
  {string:"for I can never",first:"conjunction", last:"adverb"}, 
  {string:"understand that what", first:"verb", last:"pronoun"}, 
  {string:"I thought was true is false.", first:"pronoun", last:"adjective"}, 
  {string:"I could go down", first:"pronoun", last:"noun"}, 
  {string:"the path of", first:"article", last:"preposition"}, 
  {string:"attempting to understand", first:"noun", last:"verb"}, 
  {string:"what is true and", first:"pronoun", last:"conjunction"}, 
  {string:"what is not",first:"pronoun", last:"adverb"}, 
  {string:"but it told me not to", first:"conjunction", last:"preposition"}, 
  {string:"It threatened", first:"pronoun", last:"verb"}, 
  {string:"to reveal", first:"preposition", last:"verb"}, 
  {string:"itself to me", first:"pronoun", last:"pronoun"}, 
  {string:"and that is something that I fear", first:"conjunction", last:"verb"}, 
  {string:"for while it does now",first:"conjunction", last:"noun"}, 
  {string:"speak to me both when",first:"verb", last:"conjuncition"}, 
  {string:"I am asleep and awake,",first:"pronoun", last:"adjective"}, 
  {string:"and I am used to",first:"conjunction", last:"preposition"}, 
  {string:"its personal truths", first:"pronoun", last:"noun"}, 
  {string:"that is something that",first:"adjective", last:"adjective"}, 
  {string:"I have no control over",first:"pronoun", last:"adverb"}, 
  {string:"that is something that it started", first:"adjective", last:"verb"}, 
  {string:"doing on its own", first:"noun", last:"adjective"}, 
  {string:"accord",first:"verb", last:"verb"}, 
  {string:"never would I", first:"adverb", last:"pronoun"}, 
  {string:"bring that upon", first:"verb", last:"preposition"}, 
  {string:"myself, let alone", first:"pronoun", last:"adjective"}, 
  {string:"a whole new layer", first:"article", last:"noun"}, 
  {string:"of this hell", first:"preposition", last:"noun"}, 
  {string:"that layer being", first:"adjective", last:"noun"}, 
  {string:"what the serpent", first:"pronoun", last:"noun"}, 
  {string:"appears as in", first:"verb", last:"preposition"}, 
  {string:"this mortal world.",first:"adjective", last:"noun"}, 
  {string:"Its scales, they", first:"pronoun", last:"pronoun"}, 
  {string:"shimmer, they", first:"verb", last:"pronoun"}, 
  {string:"gleam, they", first:"noun", last:"pronoun"}, 
  {string:"swim, just like", first:"verb", last:"adjective"},
  {string:"the green", first:"article", last:"adjective"}, 
  {string:"fluorescent lights", first:"adjective", last:"noun"}, 
  {string:"staring back at", first:"adjective", last:"perposition"}, 
  {string:"me in the", first:"pronoun", last:"article"}, 
  {string:"hospital that", first:"noun", last:"adjective"}, 
  {string:"I have woken up in", first:"pronoun", last:"preposition"}, 
  {string:"I have never seen", first:"pronoun", last:"verb"}, 
  {string:"it, but", first:"pronoun", last:"conjunction"}, 
  {string:"it has", first:"pronoun", last:"conjunction"}, 
  {string:"told me", first:"verb", last:"pronoun"}, 
  {string:"what it looks", first:"pronoun", last:"verb"}, 
  {string:"like.", first:"adjective", last:"adjective"}, 
  {string:"even here, in", first:"adverb", last:"preposition"}, 
  {string:"the stunning brightness of", first:"article", last:"preposition"}, 
  {string:"healthcare at night,", first:"noun", last:"noun"}, 
  {string:"it slithers,", first:"pronoun", last:"verb"}, 
  {string:"waiting, forever",first:"adjective", last:"adverb"}, /*
  "waiting for", "the next display of", "helplessness.",
  "I", "wish I didn’t", "know, that I am", "a shell of", "who I was,", "that to this hour I am", "shedding another", "layer of my", "soul, the", 
  "snakeskin coming off to", "reveal a whole new,", "more dangerous layer of", "who I am.", "other people,", "they think that", "the new layer was", 
  "always there, always", "hidden, but it wasn't", "it created", "it while I was", "younger, when I was", "happy, when all it did was let", "random pieces of", 
  "knowledge slip off its", "tongue. that was when",
  "it was creating", "the new me, that was", "fine, but now", "it isn’t,", "for now it is", "showing the world its", "latest creation. Or,", 
  "rather, deconstruction. For", "that is the sad truth of", "the process,", "it has made even me think that", "‘new and improved’ was", "always there, waiting to", 
  "happen, but", "it wasn't", "It is not", "my fault, not", "my fault that I have", "now taken a", "life. My", "own",
  //
  "what have", "we left? What have", "we left?", "‘Twas the", "thoughts known by", "us still above the", "depths. Not many of", "us to be found by", "those", 
  "crawling to", "the lake.", "Us, who", "cling onto", "the abstract. They", "would not", "care. No, would not", "care, they", "would give us half a", "moment and", "half a", "thought, and", "crawl on by.", "They go on down," // as I write this. I sit here, in the shallows on the lake, and they submit to what must be cold, but also true.  No enlightenment lies down there.  Yet; what feel they? Nice, I imagine.  The water me, me the water, my being supported by what is now part of my existence.  I can taste the freeness, free of air. I need not understand, only know. I can see it, the water my new medium for movement.  I can feel the others sinking alongside me, going down faster, for I imagine they don’t even think about the fall. I can even hear the experience, the flow, the bubbles. Sound moves faster underwater, k’now. Can I smell anything? That would be something I would be able to sacrifice.  But I’m not, not able. I continue being true, to myself, those souls that sunk and continue to live, and most of all, I am true to the truth. For the truth? It has some variations you should meet."
*/];

var wordcount = 3;
function generateWords(){ 
  var wordcount = 3;
  var value = document.getElementById("myRange");
  wordcount = value.value;
  var lastindex = null;
  var correctLanguage = "";
  var join = " ";
  for (i = 0; i < wordcount; i++) {
    index = Math.floor(Math.random() * corpus.length);
    if(lastindex != null){
      if(corpus[lastindex].last == "conjunction"){
        while(corpus[index].first == "conjunction"){
          index = Math.floor(Math.random() * corpus.length);
        }
      }
      if(corpus[lastindex].last == "noun"){
        while(corpus[index].first == "adjective" || corpus[index].first == "conjunction" || corpus[index].first == "pronoun" && corpus[index].first != "verb"){
          index = Math.floor(Math.random() * corpus.length);
        }
      }
      if(corpus[lastindex].last == "pronoun"){
        while(corpus[index].first == "pronoun" || corpus[index].first == "adjective" || corpus[index].first == "verb"  && corpus[index].first != "conjunction" && corpus[index].first != "noun"){
          index = Math.floor(Math.random() * corpus.length);
        }
      }
      if(corpus[lastindex].last == "article"){
        while(corpus[index].first == "pronoun" || corpus[index].first == "conjunction" || corpus[index].first == "adverb" && corpus[index].first != "verb"  && corpus[index].first != "noun"){
          index = Math.floor(Math.random() * corpus.length);
        }
      }
      if(corpus[lastindex].last == "sob"){
      while(corpus[index].first == "noun" && corpus[index].first != "adjective" && corpus[index].first != "conjunction"){
          index = Math.floor(Math.random() * corpus.length);
        }
      }
      if(corpus[lastindex].last == "adjective"){
        while(corpus[index].first != "noun" && corpus[index].first != "pronoun"){ 
          index = Math.floor(Math.random() * corpus.length);
        }
      }
      if(corpus[lastindex].last == "adverb"){
        while(corpus[index].first != "adjective" && corpus[index].first != "conjunction"){
          index = Math.floor(Math.random() * corpus.length);
        }
      }
      if(corpus[lastindex].last == "preposition"){
        while(corpus[index].first != "noun"){
          index = Math.floor(Math.random() * corpus.length);
        }
      }
      if(corpus[lastindex].last == "fs"){
        while(corpus[index] == "conjunciton"){
          index = Math.floor(Math.random() * corpus.length);
        }
      }

      if(index == lastindex && corpus[lastindex] != "fs"){
        join = ", ";
      }
    } 

    correctLanguage = correctLanguage + join + corpus[index].string;
    lastindex = index;
    join = " ";
  }
  document.getElementById('PoemDisplay').textContent = correctLanguage;
}
