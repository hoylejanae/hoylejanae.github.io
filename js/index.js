var map = AmCharts.makeChart("chartdiv", {

  "type": "map",
  "theme": "light",

  "dataProvider": {
    "map": "worldLow",
    "areas": [ {
      "id": "KE",
      "description": 
      "<p>The Kikuyu in Kenya fought against the English by opening their own schools. During the 1930's extensive fundraising activites took place, school buildings were erected, and self help groups formed. Each independent school was governed by a local committee. Many of these independent schools wanted to remain entirely free from direct European influence. By 1939 there were 63 Kikuyu independent schools educating a total of 12,964 pupils. </p>"
    },
      {
      "id": "AU",
      "description":
      "<p>Edward 'Kolki' Mabo was a Torres Strait Islander community leader and land rights campaigner. He became concerned that his children were losing their language and cultural traditions. With Harry Penrith he set up the Black Community School in Townsville in 1973 and served as its director until 1985. The Black Community School was able to sustain itself for twelve years.</p>"
    },
      {
        "id": "PE",
        "description":
        "<p>The Matsés people who are native to the Yavarí Valley of Peru were dissatisfied with false promises of aid from non-governmental organizations and decided to take matters into their own hands. They developed the Matsés Movement which is an association of the Matsés people providing support for their own community. The association supports an Indigenous School Program where there is a focus on learning to read and write in their native language.</p>"
    },
      {
        "id": "US",
        "description":
        "<p>The Native American Community Academy is a tuition-free public charter school in Albuquerque, New Mexico. Students come from more than 37 different tribes. The school integrates culture, wellness, language, community, family, and preparation for college. The Academy also believes that to preserve one's language is to preserve one's culture. Therefore they offer classes in Lakota, Tiwa, and Navajo languages.</p>"

    },
      {
        "id": "IN",
        "description":
        "<p>In British India a number of nationalist leaders used education to resist British imperialism. Among the institutions that developed their mission was to inculcate love for India, indigenous civilzations, local languages, and the desire to liberate India from foreign rule. One such institution was founded by a group of religious leaders that participated in the 1857 war of freedom. They established an educational institute, Darul Uloom Deoband, to prepare students to ideologically confront the British. A number of graduates from the school went on to play an active role in the fight for independence. </p>"
    }
     ]   
      
      
  },
  "areasSettings": {
    "autoZoom": true,
    "selectedColor": "#CC0000"
  },
  "smallMap": {}
} );