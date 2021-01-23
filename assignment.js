 // https://github.com/md-ismail-jabi-ullah66/assignment.

// Kilometer To Meter


             function kilometerToMeter(kilo){
                
                var meter = kilo * 1000;

                return meter;
            }

                var result = kilometerToMeter(10);


// Budget Calculator


            function budgetCalculator(clock, mobile, laptop){
                
                var clock = clock * 50;
                var mobile = mobile * 100;
                var laptop = laptop * 500;
                var result = clock + mobile + laptop;
                
                return result;
            }


// Hotel Cost         

            function hotelCost(n) {
                var night = n;
                var payment = 0;
                if (night <= 10){
                    payment = night * 100;
                } else if (night <=20) {
                    payment = night * 80;
                } else {
                    payment = night * 50;
                }

               return payment;
            }


// Mega Friend


            function megaFriend(friend) {
                var longestWord = "";
            
                friend.forEach(function(word) {
                if(word.length > longestWord.length) {
                    longestWord = word;
                }
                });
            
                return longestWord;
            }
         

