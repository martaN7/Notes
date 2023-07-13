// custom iterator

const customObject = {
    index: 0,
    data: ["a", "b", "c"],

    [Symbol.iterator](){
        return {
            next: function() {
                if(this.index < this.data.length){
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }.bind(this)
        }
    }
}

// for(const item of customObject) {
//     // console.log(item);
// }

const iterator = customObject[Symbol.iterator]();
// console.log(iterator);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

const collection = {
    index: 0,
    data: [1, 2, 3, 4, 5],

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length){
                    this.index++;
                    return {
                        value: this.data.at(-this.index),
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true,
                    }
                }
            }
        }
    }
}

// for(const item of collection){
//     console.log(item);
// }

const cycle = {
    index: 0,
    data: [1, 2, 3],

    [Symbol.iterator]() {

        return {
            next: () => {
                return {
                    value: this.data[this.index++ % this.data.length],
                    done: false
                }
            }
        }
    }
}

// const cycleIterator = cycle[Symbol.iterator]();
// console.log(cycleIterator.next());
// console.log(cycleIterator.next());
// console.log(cycleIterator.next());
// console.log(cycleIterator.next());
// console.log(cycleIterator.next());
// console.log(cycleIterator.next());

const countries = {
    "Africa": {
        "Algeria": "Algiers",
        "Angola": "Luanda",
        "Benin": "Porto-Novo",
        "Botswana": "Gaborone",
        "Burkina Faso": "Ouagadougou",
        "Burundi": "Bujumbura",
        "Cabo Verde": "Praia",
        "Cameroon": "Yaounde",
        "Central African Republic": "Bangui",
        "Chad": "N'Djamena",
        "Comoros": "Moroni",
        "Congo": "Brazzaville",
        "Cote d'Ivoire": "Yamoussoukro",
        "Democratic Republic of the Congo": "Kinshasa",
        "Djibouti": "Djibouti",
        "Egypt": "Cairo",
        "Equatorial Guinea": "Malabo",
        "Eritrea": "Asmara",
        "Eswatini": "Mbabane",
        "Ethiopia": "Addis Ababa",
        "Gabon": "Libreville",
        "Gambia": "Banjul",
        "Ghana": "Accra",
        "Guinea": "Conakry",
        "Guinea-Bissau": "Bissau",
        "Kenya": "Nairobi",
        "Lesotho": "Maseru",
        "Liberia": "Monrovia",
        "Libya": "Tripoli",
        "Madagascar": "Antananarivo",
        "Malawi": "Lilongwe",
        "Mali": "Bamako",
        "Mauritania": "Nouakchott",
        "Mauritius": "Port Louis",
        "Morocco": "Rabat",
        "Mozambique": "Maputo",
        "Namibia": "Windhoek",
        "Niger": "Niamey",
        "Nigeria": "Abuja",
        "Rwanda": "Kigali",
        "Sao Tome and Principe": "Sao Tome",
        "Senegal": "Dakar",
        "Seychelles": "Victoria",
        "Sierra Leone": "Freetown",
        "Somalia": "Mogadishu",
        "South Africa": "Pretoria",
        "South Sudan": "Juba",
        "Sudan": "Khartoum",
        "Tanzania": "Dodoma",
        "Togo": "Lome",
        "Tunisia": "Tunis",
        "Uganda": "Kampala",
        "Zambia": "Lusaka",
        "Zimbabwe": "Harare"
    },
    "Asia": {
        "Afghanistan": "Kabul",
        "Bahrain": "Manama",
        "Bangladesh": "Dhaka",
        "Bhutan": "Thimphu",
        "Brunei": "Bandar Seri Begawan",
        "Cambodia": "Phnom Penh",
        "China": "Beijing",
        "Cyprus": "Nicosia",
        "East Timor": "Dili",
        "India": "New Delhi",
        "Indonesia": "Jakarta",
        "Iran": "Tehran",
        "Iraq": "Baghdad",
        "Israel": "Jerusalem",
        "Japan": "Tokyo",
        "Jordan": "Amman",
        "Kazakhstan": "Nur-Sultan",
        "Kuwait": "Kuwait City",
        "Kyrgyzstan": "Bishkek",
        "Laos": "Vientiane",
        "Lebanon": "Beirut",
        "Malaysia": "Kuala Lumpur",
        "Maldives": "Male",
        "Mongolia": "Ulaanbaatar",
        "Myanmar": "Naypyidaw",
        "Nepal": "Kathmandu",
        "North Korea": "Pyongyang",
        "Oman": "Muscat",
        "Pakistan": "Islamabad",
        "Palestine": "Ramallah",
        "Philippines": "Manila",
        "Qatar": "Doha",
        "Saudi Arabia": "Riyadh",
        "Singapore": "Singapore",
        "South Korea": "Seoul",
        "Sri Lanka": "Colombo",
        "Syria": "Damascus",
        "Taiwan": "Taipei",
        "Tajikistan": "Dushanbe",
        "Thailand": "Bangkok",
        "Turkey": "Ankara",
        "Turkmenistan": "Ashgabat",
        "United Arab Emirates": "Abu Dhabi",
        "Uzbekistan": "Tashkent",
        "Vietnam": "Hanoi",
        "Yemen": "Sana'a"
    },
    "Europe": {
        "Albania": "Tirana",
        "Andorra": "Andorra la Vella",
        "Armenia": "Yerevan",
        "Austria": "Vienna",
        "Azerbaijan": "Baku",
        "Belarus": "Minsk",
        "Belgium": "Brussels",
        "Bosnia and Herzegovina": "Sarajevo",
        "Bulgaria": "Sofia",
        "Croatia": "Zagreb",
        "Cyprus": "Nicosia",
        "Czech Republic": "Prague",
        "Denmark": "Copenhagen",
        "Estonia": "Tallinn",
        "Finland": "Helsinki",
        "France": "Paris",
        "Georgia": "Tbilisi",
        "Germany": "Berlin",
        "Greece": "Athens",
        "Hungary": "Budapest",
        "Iceland": "Reykjavik",
        "Ireland": "Dublin",
        "Italy": "Rome",
        "Kazakhstan": "Nur-Sultan",
        "Kosovo": "Pristina",
        "Latvia": "Riga",
        "Liechtenstein": "Vaduz",
        "Lithuania": "Vilnius",
        "Luxembourg": "Luxembourg",
        "Malta": "Valletta",
        "Moldova": "Chisinau",
        "Monaco": "Monaco",
        "Montenegro": "Podgorica",
        "Netherlands": "Amsterdam",
        "North Macedonia": "Skopje",
        "Norway": "Oslo",
        "Poland": "Warsaw",
        "Portugal": "Lisbon",
        "Romania": "Bucharest",
        "Russia": "Moscow",
        "San Marino": "San Marino",
        "Serbia": "Belgrade",
        "Slovakia": "Bratislava",
        "Slovenia": "Ljubljana",
        "Spain": "Madrid",
        "Sweden": "Stockholm",
        "Switzerland": "Bern",
        "Turkey": "Ankara",
        "Ukraine": "Kyiv",
        "United Kingdom": "London",
        "Vatican City": "Vatican City"
    },
    "North America": {
        "Antigua and Barbuda": "St. John's",
        "Bahamas": "Nassau",
        "Barbados": "Bridgetown",
        "Belize": "Belmopan",
        "Canada": "Ottawa",
        "Costa Rica": "San Jose",
        "Cuba": "Havana",
        "Dominica": "Roseau",
        "Dominican Republic": "Santo Domingo",
        "El Salvador": "San Salvador",
        "Grenada": "St. George's",
        "Guatemala": "Guatemala City",
        "Haiti": "Port-au-Prince",
        "Honduras": "Tegucigalpa",
        "Jamaica": "Kingston",
        "Mexico": "Mexico City",
        "Nicaragua": "Managua",
        "Panama": "Panama City",
        "Saint Kitts and Nevis": "Basseterre",
        "Saint Lucia": "Castries",
        "Saint Vincent and the Grenadines": "Kingstown",
        "Trinidad and Tobago": "Port of Spain",
        "United States": "Washington, D.C."
    },
    "Oceania": {
        "Australia": "Canberra",
        "Fiji": "Suva",
        "Kiribati": "Tarawa",
        "Marshall Islands": "Majuro",
        "Micronesia": "Palikir",
        "Nauru": "Yaren",
        "New Zealand": "Wellington",
        "Palau": "Ngerulmud",
        "Papua New Guinea": "Port Moresby",
        "Samoa": "Apia",
        "Solomon Islands": "Honiara",
        "Tonga": "Nuku'alofa",
        "Tuvalu": "Funafuti",
        "Vanuatu": "Port Vila"
    },
    "South America": {
        "Argentina": "Buenos Aires",
        "Bolivia": "La Paz",
        "Brazil": "Brasilia",
        "Chile": "Santiago",
        "Colombia": "Bogota",
        "Ecuador": "Quito",
        "Guyana": "Georgetown",
        "Paraguay": "Asuncion",
        "Peru": "Lima",
        "Suriname": "Paramaribo",
        "Uruguay": "Montevideo",
        "Venezuela": "Caracas"
    }
}

const countriesIterator = {
    index: 0,
    data: countries,
    capitals: [],

    [Symbol.iterator](){
        this.capitals = Object.values(this.data)
            .map((continent) => Object.values(continent))
            .flat()
            .sort();
        return this;
    },
    next(){
        if(this.index < this.capitals.length){
            return {
                value: this.capitals[this.index++],
                done: false
            }
        } else {
            return {
                value: undefined,
                done: true
            }
        }
    }
}

for (const capital of countriesIterator){
    console.log(capital);
}