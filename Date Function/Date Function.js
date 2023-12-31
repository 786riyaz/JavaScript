const date = new Date();

console.clear();
console.log("Full Date :: ", date);                                      // 2023-12-03T10:04:55.607Z
console.log("Only Date :: ", date.getDate());                            // 3
console.log("Only Month ::", date.getMonth());                           // 11 - Month with 0 Index
console.log("Only Year :: ", date.getFullYear());                        // 2023
console.log("Only Date :: ", date.getHours());                           // 15
console.log("Only Minutes :: ", date.getMinutes());                      // 37
console.log("Only Seconds :: ", date.getSeconds());                      // 55
console.log("Only Mili Seconds :: ", date.getMilliseconds());            // 536
console.log("Full Time :: ", date.getTime());                            // 1701598116687

console.log();
console.log(date.setDate(5));                                           // 1701770974479 - Set Date to 5
console.log(date.setMonth(1));                                          // 1675591823694 - Set Month to 1
console.log(date.setFullYear(2024));                                    // 1707127876391 - Set Year to 2023
console.log(date.setHours(15));                                         // 1707127917351 - Set Hour to 15
console.log(date.setMinutes(50));                                       // 1707128428653 - Set Minutes to 50 
console.log(date.setSeconds(30));                                       // 1707128430158 - Set Seconds to 30
console.log(date.setMilliseconds(300));                                 // 1707128430300 - Set mili seconds to 300

console.log();
console.log(date.setTime(1234567890));                                  // 123456789 - Set date to 1234567890
console.log("New Full Date :: ", date);                                  // 1970-01-15T06:56:07.890Z - New Date as per the time 