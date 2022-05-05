document.querySelector('#check').addEventListener('click', check)

function check() {
    const birthMonth = document.querySelector('#birthMonth').value.toLowerCase ()
        
    const birthDay = document.querySelector('#birthDay').value

        if (birthMonth == 1|| birthMonth == 'january' && birthDay <= 19){
            document.querySelector('#viewBox').innerText = 'Capricorn'
            document.querySelector('#read').innerText = 'Usually you enjoy talking with others, Capricorn, but today you won\'t even want to answer the phone. Your physical stamina and mental energy are low, and you could feel out of sorts. It might help if you go for a walk sometime in the afternoon. You won\'t want to waste your evening lying around the house. Get the endorphins going and then go to a movie. You\'ll soon be your old self again!'
        }


        else if (birthMonth == 1|| birthMonth == 'january' && birthDay >= 20){
            document.querySelector('#viewBox').innerText = 'Aquarius'
            document.querySelector('#read').innerText = 'A group of friends might want you to go out with them today, Aquarius, but you probably won\'t feel up to it. Your financial situation could also require a little belt-tightening now, so you may not feel you can justify the expense. In any case, you aren\'t going to want to spend the evening alone. Invite a friend or love partner over to watch a movie with you.'
        }


        else if (birthMonth == 2|| birthMonth == 'february' && birthDay <= 18){
            document.querySelector('#viewBox').innerText = 'Aquarius'
            document.querySelector('#read').innerText = 'A group of friends might want you to go out with them today, Aquarius, but you probably won\'t feel up to it. Your financial situation could also require a little belt-tightening now, so you may not feel you can justify the expense. In any case, you aren\'t going to want to spend the evening alone. Invite a friend or love partner over to watch a movie with you.'
        }


        else if (birthMonth == 2|| birthMonth == 'february' && birthDay >= 19){
            document.querySelector('#viewBox').innerText = 'Pisces'
            document.querySelector('#read').innerText = 'Your energy is probably pretty low today, Aries. You won\'t feel like socializing, nor will you feel like staying in and reading or watching TV. Chances are you won\'t know what to do with yourself all day. Under these circumstances, the best thing to do is find a distraction. Go work out, read a thrilling book, go to a funny movie. Get your mind off your lethargy and it could well disappear.'
        }


        else if (birthMonth == 3|| birthMonth == 'march' && birthDay <= 20){
            document.querySelector('#viewBox').innerText = 'Pisces'
            document.querySelector('#read').innerText = 'Your energy is probably pretty low today, Aries. You won\'t feel like socializing, nor will you feel like staying in and reading or watching TV. Chances are you won\'t know what to do with yourself all day. Under these circumstances, the best thing to do is find a distraction. Go work out, read a thrilling book, go to a funny movie. Get your mind off your lethargy and it could well disappear.'
        }


        else if (birthMonth == 3|| birthMonth == 'march' && birthDay >= 21){
            document.querySelector('#viewBox').innerText = 'Aries'
            document.querySelector('#read').innerText = 'Your energy is probably pretty low today, Aries. You won\'t feel like socializing, nor will you feel like staying in and reading or watching TV. Chances are you won\'t know what to do with yourself all day. Under these circumstances, the best thing to do is find a distraction. Go work out, read a thrilling book, go to a funny movie. Get your mind off your lethargy and it could well disappear.'
        }

        else if (birthMonth == 4|| birthMonth == 'april' && birthDay <= 19){
            document.querySelector('#viewBox').innerText = 'Aries'
            document.querySelector('#read').innerText = 'Your energy is probably pretty low today, Aries. You won\'t feel like socializing, nor will you feel like staying in and reading or watching TV. Chances are you won\'t know what to do with yourself all day. Under these circumstances, the best thing to do is find a distraction. Go work out, read a thrilling book, go to a funny movie. Get your mind off your lethargy and it could well disappear.'
        }


        else if (birthMonth == 4|| birthMonth == 'april' && birthDay >= 20){
            document.querySelector('#viewBox').innerText = 'Taurus'
            document.querySelector('#read').innerText = 'Career and financial goals could seem completely stalled, Taurus, and this could have you depressed, frustrated, and in something of a panic. Don\'t fall into this trap. This isn\'t a permanent condition. You\'ll be back on track in a few days. In the meantime, be good to yourself. Go to your favorite restaurant, buy yourself a present, or spend the afternoon in a bookstore. If nothing else, you\'ll feel better.'
        }
    
        else if (birthMonth == 5|| birthMonth == 'may' && birthDay <= 20){
            document.querySelector('#viewBox').innerText = 'Taurus'
            document.querySelector('#read').innerText = 'aCareer and financial goals could seem completely stalled, Taurus, and this could have you depressed, frustrated, and in something of a panic. Don\'t fall into this trap. This isn\'t a permanent condition. You\'ll be back on track in a few days. In the meantime, be good to yourself. Go to your favorite restaurant, buy yourself a present, or spend the afternoon in a bookstore. If nothing else, you\'ll feel better.'
        }
        else if (birthMonth == 5|| birthMonth == 'may' && birthDay >= 21){
            document.querySelector('#viewBox').innerText = 'Gemini'
            document.querySelector('#read').innerText = 'A colleague could be in a very bad mood, Gemini, and therefore not the easiest person in the world to deal with. In fact, today he or she could resist working at all, and you might feel obligated to take up the slack. Only do it if the tasks are urgent. It isn\'t fair to you to have to do someone else\'s job. Don\'t feel guilty if you leave it unfinished.'
        }

        else if (birthMonth == 6|| birthMonth == 'june' && birthDay <= 20){
            document.querySelector('#viewBox').innerText = 'Gemini'
            document.querySelector('#read').innerText = 'A colleague could be in a very bad mood, Gemini, and therefore not the easiest person in the world to deal with. In fact, today he or she could resist working at all, and you might feel obligated to take up the slack. Only do it if the tasks are urgent. It isn\'t fair to you to have to do someone else\'s job. Don\'t feel guilty if you leave it unfinished.'
        }

        else if (birthMonth == 6|| birthMonth == 'june' && birthDay >= 21){
            document.querySelector('#viewBox').innerText = 'Cancer'
            document.querySelector('#read').innerText = 'Plans to go away on vacation or perhaps a business trip could be put on hold today, Cancer. Events you might have been scheduled to attend could be temporarily postponed. This could leave you feeling somewhat at a loss because you\'d planned to be away and now you don\'t know what to do with yourself in the meantime. Be your usual ingenious self and you\'ll find something! Go to it'
        }

        else if (birthMonth == 7|| birthMonth == 'july' && birthDay <= 22){
            document.querySelector('#viewBox').innerText = 'Cancer'
            document.querySelector('#read').innerText = 'Plans to go away on vacation or perhaps a business trip could be put on hold today, Cancer. Events you might have been scheduled to attend could be temporarily postponed. This could leave you feeling somewhat at a loss because you\'d planned to be away and now you don\'t know what to do with yourself in the meantime. Be your usual ingenious self and you\'ll find something! Go to it'
        }
        
        else if (birthMonth == 7|| birthMonth == 'july' && birthDay >= 22){
            document.querySelector('#viewBox').innerText = 'Leo'
            document.querySelector('#read').innerText = 'This isn\'t a good day to visit the racetrack, Las Vegas, or any store that sells lottery tickets. Stay away from the stock market, too, Leo. Speculation of any kind now could be risky at best and disastrous at worst. Romance is also likely to be blocked today, since you\'re probably feeling a bit lethargic and not very sociable. Read a good book. That\'s the most productive thing you could do today'
        }

        else if (birthMonth == 8|| birthMonth == 'august' && birthDay <= 23){
            document.querySelector('#viewBox').innerText = 'Leo'
            document.querySelector('#read').innerText = 'This isn\'t a good day to visit the racetrack, Las Vegas, or any store that sells lottery tickets. Stay away from the stock market, too, Leo. Speculation of any kind now could be risky at best and disastrous at worst. Romance is also likely to be blocked today, since you\'re probably feeling a bit lethargic and not very sociable. Read a good book. That\'s the most productive thing you could do today'
        }
    
        else if (birthMonth == 8|| birthMonth == 'august' && birthDay >= 23){
            document.querySelector('#viewBox').innerText = 'Virgo'
            document.querySelector('#read').innerText = 'Virgo, you\'re likely to want to retreat into your bedroom and slam the door today. You won\'t feel like talking or socializing with anyone, not even those closest to you. Too much work could have you in a state of near exhaustion and almost total burnout, which means that getting some rest is probably the best thing you could do right now. Relax now, and get yourself going again tomorrow.'
        }

        else if (birthMonth == 9|| birthMonth == 'september' && birthDay <= 22){
            document.querySelector('#viewBox').innerText = 'Virgo'
            document.querySelector('#read').innerText = 'Virgo, you\'re likely to want to retreat into your bedroom and slam the door today. You won\'t feel like talking or socializing with anyone, not even those closest to you. Too much work could have you in a state of near exhaustion and almost total burnout, which means that getting some rest is probably the best thing you could do right now. Relax now, and get yourself going again tomorrow.'
        }

        else if (birthMonth == 9|| birthMonth == 'september' && birthDay >= 23){
            document.querySelector('#viewBox').innerText = 'Libra'
            document.querySelector('#read').innerText = 'This might prove to be one of those days in which it\'s very hard to get anything related to work or communication off the ground, Libra. You could find excuses to stop working more often than usual, particularly if it involves calling people on the phone. Don\'t fight it. Take care of the most urgent tasks. The world won\'t come to an end if you put the rest off a while.'
        }

        else if (birthMonth == 10|| birthMonth == 'october' && birthDay <= 22){
            document.querySelector('#viewBox').innerText = 'Libra'
            document.querySelector('#read').innerText = 'his might prove to be one of those days in which it\'s very hard to get anything related to work or communication off the ground, Libra. You could find excuses to stop working more often than usual, particularly if it involves calling people on the phone. Don\'t fight it. Take care of the most urgent tasks. The world won\'t come to an end if you put the rest off a while.'
        }

        else if (birthMonth == 10|| birthMonth == 'october' && birthDay >= 23){
            document.querySelector('#viewBox').innerText = 'Scorpio'
            document.querySelector('#read').innerText = 'You might have planned to make a particular purchase today, Scorpio, but a quick check of your financial situation could reveal that it would be better if you waited until your next payday. This could prove disappointing and frustrating, but look at it this way - you\'ve waited this long for this item. It isn\'t urgent, so waiting a little longer certainly won\'t hurt. Do something else today.'
        }

        else if (birthMonth == 11|| birthMonth == 'november' && birthDay <= 21){
            document.querySelector('#viewBox').innerText = 'Scorpio'
        document.querySelector('#read').innerText = 'You might have planned to make a particular purchase today, Scorpio, but a quick check of your financial situation could reveal that it would be better if you waited until your next payday. This could prove disappointing and frustrating, but look at it this way - you\'ve waited this long for this item. It isn\'t urgent, so waiting a little longer certainly won\'t hurt. Do something else today.'}

        else if (birthMonth == 11|| birthMonth == 'november' && birthDay >= 22){
                document.querySelector('#viewBox').innerText = 'Sagittarius'
                document.querySelector('#read').innerText = 'A lack of physical and mental energy as well as motivation could have you in a lethargic mood today, Sagittarius. You won\'t feel like doing much of anything. You might get extremely irritated at the thought of having to work in any way. It might be a good idea to go to a movie in the evening, preferably a thriller or action movie. This will get your juices flowing again.'
            }

        else if (birthMonth == 12|| birthMonth == 'december' && birthDay <= 21){
                document.querySelector('#viewBox').innerText = 'Sagittarius'
                document.querySelector('#read').innerText = 'A lack of physical and mental energy as well as motivation could have you in a lethargic mood today, Sagittarius. You won\'t feel like doing much of anything. You might get extremely irritated at the thought of having to work in any way. It might be a good idea to go to a movie in the evening, preferably a thriller or action movie. This will get your juices flowing again.'
            }

        else if (birthMonth == 12|| birthMonth == 'december' && birthDay >= 22){
            document.querySelector('#viewBox').innerText = 'Capricorn'
            document.querySelector('#read').innerText = 'Usually you enjoy talking with others, Capricorn, but today you won\'t even want to answer the phone. Your physical stamina and mental energy are low, and you could feel out of sorts. It might help if you go for a walk sometime in the afternoon. You won\'t want to waste your evening lying around the house. Get the endorphins going and then go to a movie. You\'ll soon be your old self again!'
            }
}

