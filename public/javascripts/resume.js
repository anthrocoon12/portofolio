var tiles = `
            <div class="portofolio-tile portofolio-tile-extra-left" onclick="showIntroduction()">
            <img class="portofolio-tile-image" src="/assets/images/portofolio-tiles-1.jpeg">
            <div class="portofolio-tile-text"><a><strong>Introduction</strong></a></div>
            </div>
            <div class="portofolio-tile" onclick="showBasicInfo()">
            <img class="portofolio-tile-image" src="/assets/images/portofolio-tiles-2.jpeg">
            <div class="portofolio-tile-text"><strong>Basic Info</strong></div>
            </div>
            <div class="portofolio-tile" onclick="showInterests()">
            <img class="portofolio-tile-image" src="/assets/images/portofolio-tiles-3.jpeg">
            <div class="portofolio-tile-text"><strong>Interests</strong></div>
            </div>
            <br/>
            <div class="portofolio-tile portofolio-tile-extra-left" onclick="showSkills()">
            <img class="portofolio-tile-image" src="/assets/images/portofolio-tiles-4.jpeg">
            <div class="portofolio-tile-text"><strong>Skills</strong></div>
            </div>
            <div class="portofolio-tile" onclick="showEducation()">
            <img class="portofolio-tile-image" src="/assets/images/portofolio-tiles-5.jpeg">
            <div class="portofolio-tile-text"><strong>Education</strong></div>
            </div>
            <div class="portofolio-tile" onclick="showWorkExperiences()">
            <img class="portofolio-tile-image" src="/assets/images/portofolio-tiles-6.jpeg">
            <div class="portofolio-tile-text"><strong>Work Experiences</strong></div>
            </div>
            <br>
            <div class="portofolio-tile portofolio-tile-extra-left" onclick="showArchievementsAndAwards()">
            <img class="portofolio-tile-image" src="/assets/images/portofolio-tiles-7.jpeg">
            <div class="portofolio-tile-text"><strong>Archievement and Awards</strong></div>
            </div>
            <div class="portofolio-tile" onclick="showOrganizationsAndVolunteerExperiences()">
            <img class="portofolio-tile-image" src="/assets/images/portofolio-tiles-8.jpeg">
            <div class="portofolio-tile-text"><strong>Organizations Volunteer Experience</strong></div>
            </div>
            <div class="portofolio-tile" onclick="showContact()">
            <img class="portofolio-tile-image" src="/assets/images/portofolio-tiles-9.jpeg">
            <div class="portofolio-tile-text"><strong>Contact</strong></div>
            </div>
            <br>
            `

var introduction =  `
                    <div class="card text-white bg-primary mb-3" style="max-width: 69vw;">
                        <div class="card-header">
                            <strong>Introduction</strong>
                            <img class="button-back" src="/assets/images/left-arrow.png") onclick="showTiles()">
                        </div>
                        <div class="card-body">
                            <h6>
                            Hey there! My name is Pande Ketut Cahya Nugraha, and i'm currently an Undergraduate
                            Student of Computer Science at Universitas Indonesia. My primary interest is Programming 
                            (Back-end, Game Dev, and AI in particular), and gaming.
                            </h4>
                        </div>
                    </div>
                    `

var basicInfo = `
                <div class="card text-white bg-primary mb-3" style="max-width: 69vw;">
                    <div class="card-header">
                        <strong>Basic Info</strong>
                        <img class="button-back" src="/assets/images/left-arrow.png") onclick="showTiles()">
                    </div>
                    <div class="card-body">
                        <p>
                        Full Name        : Pande Ketut Cahya Nugraha<br>
                        Nickname         : Cahya<br>
                        Full Name        : Pande Ketut Cahya Nugraha<br>
                        Current Address	 : Jl. Masjid Al-Farouq No. 46 RT. 1/RW. 1, Kukusan, Beji, Depok<br>
                        Birth            : Denpasar, 12 April 1999<br>
                        Motto            : <em>Privus, Consuete, Graucus</em><br>
                    </p>
                    </div>
                </div>
                `

var interests = `
                <div class="card text-white bg-primary mb-3" style="max-width: 69vw;">
                    <div class="card-header">
                        <strong>Interests</strong>
                        <img class="button-back" src="/assets/images/left-arrow.png") onclick="showTiles()">
                    </div>
                    <div class="card-body">
                        <div class="container float-left" style="max-width: 40vw;">
                            <h6><em>Programming</em></h4><br>
                            <p>
                            I first encounter programming at 7th Grade in Junior High School. I was part of the school Computer
                            Club, and there i learn to write my first "Hello World" program, using Pascal. I also created some
                            small programs like calculator and mini-games. However, i quit the Club on 8th Grade due to grades
                            problems (the coach didn't report my extracurricular grade to the homeroom teacher).</p>
                            <p>
                            I later rediscovered programming at my High School. I joined the programming Club and unexpectedly
                            become the representative of my school at OSK, OSP, and OSN Informatika 2015 and 2016. My archievements
                            at OSN paved my way to Universitas Indonesia.</p><br>
                        </div>   

                        <div class="container float-right" style="max-width: 40vw;">
                            <h6><em>Gaming</em></h4><br>
                            <p>
                            I am addicted to gaming since Elementary School. It peaked at Junior High School, where i can spend
                            more than 6 hours gaming a day. However, since High School my gaming frequency lowers due to outdated
                            PC and other activities.</p>
                        </div>                        
                    </div>
                </div>
                `

var skills =    `
                <div class="card text-white bg-info mb-3" style="max-width: 69vw;">
                    <div class="card-header">
                        <strong>Skills</strong>
                        <img class="button-back" src="/assets/images/left-arrow.png") onclick="showTiles()">
                    </div>
                    <div class="card-body">
                        <ul class="float-left">
                            <li>Java</li>
                            <li>Python</li>
                            <li>C++</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                        <ul class="float-left">
                            <li>Spring JPA</li>
                            <li>Spring Web</li>
                            <li>MySQL</li>
                            <li>Play Framework</li>
                        </ul>
                    </div>
                </div>
                `

var education =   `
                    <div class="card text-white bg-info mb-3" style="max-width: 69vw;">
                        <div class="card-header">
                            <strong>Education</strong>
                            <img class="button-back" src="/assets/images/left-arrow.png") onclick="showTiles()">
                        </div>
                        <div class="card-body">
                            <div class="container float-left" style="max-width: 40vw;">
                                <h6>Universitas Indonesia / S. Kom</h4>
                                <small>July 2017 - Present  Depok</small>
                                <p>
                                Currently studying at Faculty of Computer Science<br>
                                Current GPA : 4.00</p>
                            </div>

                            <div class="container float-right" style="max-width: 40vw;">
                                <h6>SMAN 3 Denpasar / High School Diploma</h4>
                                <small>July 2014 - May 2017,  Denpasar</small>
                                <br>
                            </div>

                            <div class="container float-left" style="max-width: 40vw;">
                            <h6>SMPN 3 Denpasar / Junior High School</h4>
                            <small>July 2011 - June 2014,  Denpasar</small>
                            </div>

                            <div class="container float-right" style="max-width: 40vw;">
                            <h6>SDN 3 Denpasar / Elementary School</h4>
                            <small>July 2005 - June 2011,  Denpasar</small>
                            </div>
                        </div>                          
                    </div>
                    `
                            
var workExperiences =   `
                        <div class="card text-white bg-info mb-3" style="max-width: 69vw;">
                            <div class="card-header">
                                <strong>Work Experiences</strong>
                                <img class="button-back" src="/assets/images/left-arrow.png") onclick="showTiles()">
                            </div>
                            <div class="card-body">
                                <div class="container float-left" style="max-width: 40vw;">
                                    <h6>
                                    GDP LABS / Software Engineer Intern</h4>
                                    <small>
                                    January 2018 - Denpasar</small>
                                    <p>
                                    Developing Game Chatbot for Kaskus Chat to engage more users with 2 other interns.<br>
                                    Responsible for designing database, creating services for registration and administrator functionalities.<br>
                                    Technologies used : Java, Spring Web, Spring JPA, MySQL, Flyway</p>
                                </div>
                            </div>
                        </div>
                        `

var archievementsAndAwards =    `
                                <div class="card text-white bg-primary mb-3" style="max-width: 69vw;">
                                    <div class="card-header">
                                        <strong>Archievements and Awards</strong>
                                        <img class="button-back" src="/assets/images/left-arrow.png") onclick="showTiles()">
                                    </div>
                                    <div class="card-body">
                                        <ul class="float-left list-unstyled">
                                            <li>
                                                <h6 class="float-left">Finalist, The 2017 ACM-ICPC Asia Jakarta Regional Contest</h4>
                                                <small class="float-left">November 2017, Jakarta | ACM-ICPC</small></li>
                                            <li>
                                                <h6 class="float-left">Top 16 TOKI 2017</h4>
                                                <small class="float-left">October 2016, Bandung | Tim Olimpiade Komputer Indonesia</small></li>
                                            <li>
                                                <h6 class="float-left">Silver Medal, OSN Informatika 2016</h4>
                                                <small class="float-left">May 2016, Indonesia National Informatics Olympiad</small></li>
                                            <li>
                                                <h6 class="float-left">First Place, Informatics Olympiad Bali Logic and Computer Competition</h4>
                                                <small class="float-left">March 2016, Faculty of Mathematics and Natural Science, University of Udayana</small></li>
                                            <li>
                                                <h6 class="float-left">Second Place, Programming Category Information Technology Creative Competition</h4>
                                                <small class="float-left">November 2015, Faculty of Engineering, University of Udayana</small></li>
                                            <li>
                                                <h6 class="float-left">Bronze Medal, OSN Informatika 2015</h4>
                                                <small class="float-left">May 2015, Indonesia National Informatics Olympiad</small></li>
                                        <ul>
                                    </div>                          
                                </div>
                                `
                            
var organizationsAndVolunteerExperiences =  `
                                            <div class="card text-white bg-primary mb-3" style="max-width: 69vw;">
                                                <div class="card-header">
                                                    <strong>Organizations and Volunteer Experiences</strong>
                                                    <img class="button-back" src="/assets/images/left-arrow.png") onclick="showTiles()">
                                                </div>
                                                <div class="card-body">
                                                    <div class="container float-left" style="max-width: 40vw;">
                                                        <h4>Organization</h4>
                                                            <h6>Staff of Department of Student Welfare Advocacy, Student Executive Board Fasilkom UI 2018</h4>
                                                            <small>February 2018 – Present, Depok</small>
                                                    </div>
                                                    <br>
                                                    <div class="container float-right" style="max-width: 40vw;">
                                                        <h4>Volunteer Experience</h4>                            
                                                            <h6>Staff of Equipment Division (Staf Perlengkapan), 12th Hindu for Generation</h4>
                                                            <small>Oct 2017 – Nov 2017, Depok</small>
                                                            <p>Staff of Equipment Division (Staf Perlengkapan) at 12th Hindu for Generation
                                                            , an annual event by KMHD UI to promote Hindu students existence.</p>                            
                                                            <br>
                                                            <h6>Vice PIC of Equipment Division, TOS UI Bali 2018</h4>
                                                            <small>Dec 2017 – Jan 2018</small>
                                                            <p>Vice PIC of Equipment Division (WaPJ Perlengkapan) at TOS UI Bali 2018
                                                            , a mock exam of SBMPTN for high school students in Bali.</p>
                                                    </div>
                                                </div>                          
                                            </div>                          
                                            `

var contact =    `
                <div class="card text-white bg-primary mb-3" style="max-width: 69vw;">
                    <div class="card-header">
                        <strong>Contact</strong>
                        <img class="button-back" src="/assets/images/left-arrow.png") onclick="showTiles()">
                    </div>
                    <div class="card-body">
                        <ul class="float-left list-unstyled">
                            <li>Phone       : (+62) 819-9974-9715</li>
                            <li>Email       : cahyanugraha12@gmail.com</li>
                            <li>Facebook    : <a style="color: white;" href="https://www.facebook.com/cahyanugraha120499" target="_blank">www.facebook.com/cahyanugraha120499</a></li>
                            <li>Twitter     : <a style="color: white;" href="https://www.twitter.com/cahyanugraha12" target="_blank">@cahyanugraha12</a></li>
                            <li>Instagram   : <a style="color: white;" href="https://www.instagram.com/cahyanugraha12" target="_blank">@cahyanugraha12</a></li>
                            <li>LinkedIn    : <a style="color: white;" href="https://www.linkedin.com/in/cahyanugraha12" target="_blank">www.linkedin.com/in/cahyanugraha12</a></li>
                        </ul>
                    </div>
                </div>
                `               
                
function showTiles() {
    $('#content').html(tiles);
}

function showIntroduction() {
    $('#content').html(introduction);
}

function showBasicInfo() {
    $('#content').html(basicInfo);
}

function showInterests() {
    $('#content').html(interests);
}

function showSkills() {
    $('#content').html(skills);
}

function showEducation() {
    $('#content').html(education);
}

function showWorkExperiences() {
    $('#content').html(workExperiences);
}

function showArchievementsAndAwards() {
    $('#content').html(archievementsAndAwards);
}

function showOrganizationsAndVolunteerExperiences() {
    $('#content').html(organizationsAndVolunteerExperiences);
}

function showContact() {
    $('#content').html(contact);
}