async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendScript(scriptText) {
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    const main = document.querySelector("#main");
    const textarea = main.querySelector('div[contenteditable="true"]');

    if (!textarea) throw new Error("No tienes una conversación de WhatsApp abierta.");

    for (const line of lines) {
        console.log("Escribiendo:", line);

        const dataTransfer = new DataTransfer();
        dataTransfer.setData("text", line);
        const event = new ClipboardEvent("paste", {
            clipboardData: dataTransfer,
            bubbles: true
        });
        textarea.dispatchEvent(event);

        await delay(300);

        const sendBtn = main.querySelector('button[data-tab="11"]') ||
                        main.querySelector('button span[data-icon="wds-ic-send-filled"]')?.closest('button');

        if (!sendBtn) {
            console.warn("❌ No se encontró el botón enviar");
            continue;
        }

        sendBtn.click();

        await delay(500);
    }

    return lines.length;
}
// This is titanic if you want a another you only copy the firts functions and ask to chatgpt the content what you wnat
  const content = `"TITANIC"

                                      Screenplay by

                                      James Cameron

                

               BLACKNESS

               Then two faint lights appear, close together... growing 
               brighter. They resolve into two DEEP SUBMERSIBLES, free-
               falling toward us like express elevators.

               One is ahead of the other, and passes close enough to FILL 
               FRAME, looking like a spacecraft blazing with lights, 
               bristling with insectile manipulators.

               TILTING DOWN to follow it as it descends away into the 
               limitless blackness below. Soon they are fireflies, then 
               stars. Then gone.

                                                                    CUT TO:

               EXT. / INT. MIR ONE / NORTH ATLANTIC DEEP

               PUSHING IN on one of the falling submersibles, called MIR 
               ONE, right up to its circular viewport to see the occupants.

               INSIDE, it is a cramped seven foot sphere, crammed with 
               equipment. ANATOLY MIKAILAVICH, the sub's pilot, sits hunched 
               over his controls... singing softly in Russian.

               Next to him on one side is BROCK LOVETT. He's in his late 
               forties, deeply tanned, and likes to wear his Nomex suit 
               unzipped to show the gold from famous shipwrecks covering 
               his gray chest hair. He is a wiley, fast-talking treasure 
               hunter, a salvage superstar who is part historian, part 
               adventurer and part vacuum cleaner salesman. Right now, he 
               is propped against the CO2 scrubber, fast asleep and snoring.

               On the other side, crammed into the remaining space is a 
               bearded wide-body named LEWIS BODINE, who is also asleep. 
               Lewis is an R.O.V. (REMOTELY OPERATED VEHICLE) pilot and is 
               the resident Titanic expert.

               Anatoly glances at the bottom sonar and makes a ballast 
               adjustment.

                                                                    CUT TO:

               EXT. THE BOTTOM OF THE SEA

               A pale, dead-flat lunar landscape. It gets brighter, lit 
               from above, as MIR ONE enters FRAME and drops to the seafloor 
               in a downblast from its thrusters. It hits bottom after its 
               two hour free-fall with a loud BONK.

                                                                    CUT TO:

               INT. MIR ONE

               Lovett and Bodine jerk awake at the landing.

                                     ANATOLY
                              (heavy Russian accent)
                         We are here.

               EXT. / INT. MIR ONE AND TWO

               MINUTES LATER: THE TWO SUBS

               Skim over the seafloor to the sound of sidescan sonar and 
               the THRUM of big thrusters.

               The featureless gray clay of the bottom unrolls in the lights 
               of the subs. Bodine is watching the sidescan sonar display, 
               where the outline of a huge pointed object is visible. Anatoly 
               lies prone, driving the sub, his face pressed to the center 
               port.

                                     BODINE
                         Come left a little. She's right in 
                         front of us, eighteen meters. Fifteen. 
                         Thirteen... you should see it.

                                     ANATOLY
                         Do you see it? I don't see it... 
                         there!

               Out of the darkness, like a ghostly apparition, the bow of 
               the ship appears. Its knife-edge prow is coming straight at 
               us, seeming to plow the bottom sediment like ocean waves. It 
               towers above the seafloor, standing just as it landed 84 
               years ago.

               THE TITANIC

               Or what is left of her. Mir One goes up and over the bow 
               railing, intact except for an overgrowth of "rusticles" 
               draping it like mutated Spanish moss.

               TIGHT ON THE EYEPIECE MONITOR of a video camcorder. Brock 
               Lovett's face fills the BLACK AND WHITE FRAME.

                                     LOVETT
                         It still gets me every time.

               The image pans to the front viewport, looking over Anatoly's 
               shoulder, to the bow railing visible in the lights beyond. 
               Anatoly turns.

                                     ANATOLY
                         Is just your guilt because of stealing 
                         from the dead.

               CUT WIDER

               To show that Brock is operating the camera himself, turning 
               it in his hand so it points at his own face.

                                     LOVETT
                         Thanks, Tolya. Work with me, here.

               Brock resumes his serious, pensive gaze out the front port, 
               with the camera aimed at himself at arm's length.

                                     LOVETT
                         It still gets me every time... to 
                         see the sad ruin of the great ship 
                         sitting here, where she landed at 
                         2:30 in the morning, April 15, 1912, 
                         after her long fall from the world 
                         above.

               Anatoly rolls his eyes and mutters in Russian. Bodine chuckles 
               and watches the sonar.

                                     BODINE
                         You are so full of shit, boss.

               Mir Two drives aft down the starboard side, past the huge 
               anchor while Mir One passes over the seemingly endless 
               forecastle deck, with its massive anchor chains still laid 
               out in two neat rows, its bronze windlass caps gleaming. The 
               22 foot long subs are like white bugs next to the enormous 
               wreck.

                                     LOVETT (V.O.)
                         Dive nine. Here we are again on the 
                         deck of Titanic... two and a half 
                         miles down. The pressure is three 
                         tons per square inch, enough to crush 
                         us like a freight train going over 
                         an ant if our hull fails. These 
                         windows are nine inches thick and if 
                         they go, it's sayonara in two 
                         microseconds.

               Mir Two lands on the boat deck, next to the ruins of the 
               Officer's Quarters. Mir One lands on the roof of the deck 
               hous nearby.

                                     LOVETT
                         Right. Let's go to work.

               Bodine slips on a pair of 3-D electronic goggles, and grabs 
               the joystick controls of the ROV.

               OUTSIDE THE SUB, the ROV, a small orange and black robot 
               called SNOOP DOG, lifts from its cradle and flies forward.

                                     BODINE (V.O.)
                         Walkin' the dog.

               Snoop Dog drives itself away from the sub, paying out its 
               umbilical behind it like a robot yo-yo. Its twin stereo-video 
               cameras swivel like insect eyes. The ROV descends through an 
               open shaft that once was the beautiful First Class Grand 
               Staircase.

               Snoop Dog goes down several decks, then moves laterally into 
               the First Class Reception Room.

               SNOOP'S VIDEO POV

               Moving through the cavernous interior. The remains of the 
               ornate handcarved woodwork which gave the ship its elegance 
               move through the floodlights, the lines blurred by slow 
               dissolution and descending rusticle formations. Stalactites 
               of rust hang down so that at times it looks like a natural 
               grotto, then the scene shifts and the lines of a ghostly 
               undersea mansion can be seen again.

               MONTAGE STYLE

               As Snoop passes the ghostly images of Titanic's opulence:

               A grand piano in amazingly good shape, crashed on its side 
               against a wall. The keys gleam black and white in the lights.

               A chandelier, still hanging from the ceiling by its wire... 
               glinting as Snoop moves around it.

               Its lights play across the floor, revealing a champagne 
               bottle, then some WHITE STAR LINE china... a woman's high-
               top "granny shoe". Then something eerie: what looks like a 
               child's skull resolves into the porcelain head of a doll.

               Snoop enters a corridor which is much better preserved. Here 
               and there a door still hangs on its rusted hinges. An ornate 
               piece of molding, a wall sconce... hint at the grandeur of 
               the past.

               THE ROV

               Turns and goes through a black doorway, entering room B-52, 
               the sitting room of a "promenade suite", one of the most 
               luxurious staterooms on Titanic.

                                     BODINE
                         I'm in the sitting room. Heading for 
                         bedroom B-54.

                                     LOVETT
                         Stay off the floor. Don't stir it up 
                         like you did yesterday.

                                     BODINE
                         I'm tryin' boss.

               Glinting in the lights are the brass fixtures of the near-
               perfectly preserved fireplace. An albino Galathea crab crawls 
               over it. Nearby are the remains of a divan and a writing 
               desk. The Dog crosses the ruins of the once elegant room 
               toward another DOOR. It squeezes through the doorframe, 
               scraping rust and wood chunks loose on both sides. It moves 
               out of a cloud of rust and keeps on going.

                                     BODINE
                         I'm crossing the bedroom.

               The remains of a pillared canopy bed. Broken chairs, a 
               dresser. Through the collapsed wall of the bathroom, the 
               porcelain commode and bathtub took almost new, gleaming in 
               the dark.

                                     LOVETT
                         Okay, I want to see what's under 
                         that wardrobe door.

               SEVERAL ANGLES

               As the ROV deploys its MANIPULATOR ARMS and starts moving 
               debris aside. A lamp is lifted, its ceramic colors as bright 
               as they were in 1912.

                                     LOVETT
                         Easy, Lewis. Take it slow.

               Lewis grips a wardrobe door, lying at an angle in a corner, 
               and pulls it with Snoop's gripper. It moves reluctantly in a 
               cloud of silt. Under it is a dark object. The silt clears 
               and Snoop's cameras show them what was under the door...

                                     BODINE
                         Ooohh daddy-oh, are you seein' what 
                         I'm seein'?

               CLOSE ON LOVETT

               Watching his monitors. By his expression it is like he is 
               seeing the Holy Grail.

                                     LOVETT
                         Oh baby baby baby.
                              (grabs the mike)
                         It's payday, boys.

               ON THE SCREEN

               In the glare of the lights, is the object of their quest: a 
               small STEEL COMBINATION SAFE.

                                                                    CUT TO:

               EXT. STERN OF DECK OF KELDYSH - DAY

               THE SAFE, dripping wet in the afternoon sun, is lowered onto 
               the deck of a ship by a winch cable.

               We are on the Russian research vessel AKADEMIK MISTISLAV 
               KELDYSH. A crowd has gathered, including most of the crew of 
               Keldysh, the sub crews, and a hand-wringing money guy named 
               BOBBY BUELL who represents the limited partners. There is 
               also a documentary video crew, hired by Lovett to cover his 
               moment of glory.

               Everyone crowds around the safe. In the background Mir Two 
               is being lowered into its cradle on deck by a massive 
               hydraulic arm. Mir One is already recovered with Lewis Bodine 
               following Brock Lovett as he bounds over to the safe like a 
               kid on Christmas morning.

                                     BODINE
                         Who's the best? Say it.

                                     LOVETT
                         You are, Lewis.
                              (to the video crew)
                         You rolling?

                                     CAMERAMAN
                         Rolling.

               Brock nods to his technicians, and they set about drilling 
               the safe's hinges. During this operation, Brock amps the 
               suspense, working the lens to fill the time.

                                     LOVETT
                         Well, here it is, the moment of truth. 
                         Here's where we find out if the time, 
                         the sweat, the money spent to charter 
                         this ship and these subs, to come 
                         out here to the middle of the North 
                         Atlantic... were worth it. If what 
                         we think is in that same... is in 
                         that safe... it will be.

               Lovett grins wolfishly in anticipation of his greatest find 
               yet. The door is pried loose. It clangs onto the deck. Lovett 
               moves closer, peering into the safe's wet interior. A long 
               moment then... his face says it all.

                                     LOVETT
                         Shit.

                                     BODINE
                         You know, boss, this happened to 
                         Geraldo and his career never 
                         recovered.

                                     LOVETT
                              (to the video cameraman)
                         Get that outta my face.

                                                                    CUT TO:

               INT. LAB DECK, PRESERVATION ROOM - DAY

               Technicians are carefully removing some papers from the safe 
               and placing them in a tray of water to separate them safely. 
               Nearby, other artifacts from the stateroom are being washed 
               and preserved.

               Buell is on the satellite phone with the INVESTORS. Lovett 
               is yelling at the video crew.

                                     LOVETT
                         You send out what I tell you when I 
                         tell you. I'm signing your paychecks, 
                         not 60 minutes. Now get set up for 
                         the uplink.

               Buell covers the phone and turns to Lovett.

                                     BUELL
                         The partners want to know how it's 
                         going?

                                     LOVETT
                         How it's going? It's going like a 
                         first date in prison, whattaya think?!

               Lovett grabs the phone from Buell and goes instantly smooth.

                                     LOVETT
                         Hi, Dave? Barry? Look, it wasn't in 
                         the safe... no, look, don't worry 
                         about it, there're still plenty of 
                         places it could be... in the floor 
                         debris in the suite, in the mother's 
                         room, in the purser's safe on C 
                         deck...
                              (seeing something)
                         Hang on a second.

               A tech coaxes some letters in the water tray to one side 
               with a tong... revealing a pencil (conte crayon) drawing of 
               a woman.

               Brock looks closely at the drawing, which is in excellent 
               shape, though its edges have partially disintegrated. The 
               woman is beautiful, and beautifully rendered. In her late 
               teens or early twenties, she is nude, though posed with a 
               kind of casual modesty. She is on an Empire divan, in a pool 
               of light that seems to radiate outward from her eyes. Scrawled 
               in the lower right corner is the date: April 14 1912. And 
               the initials JD.

               The girl is not entirely nude. At her throat is a diamond 
               necklace with one large stone hanging in the center.

               Lovett grabs a reference photo from the clutter on the lab 
               table. It is a period black-and-white photo of a diamond 
               necklace on a black velvet jeweler's display stand. He holds 
               it next to the drawing. It is clearly the same piece... a 
               complex setting with a massive central stone which is almost 
               heart-shaped.

                                     LOVETT
                         I'll be God damned.

                                                                    CUT TO:

               INSERT

               A CNN NEWS STORY: a live satellite feed from the deck of the 
               Keldysh, intercut with the CNN studio.

                                     ANNOUNCER
                         Treasure hunter Brock Lovett is best 
                         known for finding Spanish gold in 
                         sunken galleons in the Caribbean. 
                         Now he is using deep submergence 
                         technology to work two and a half 
                         miles down at another famous wreck... 
                         the Titanic. He is with us live via 
                         satellite from a Russian research 
                         ship in the middle of the Atlantic... 
                         hello Brock?

                                     LOVETT
                         Yes, hi, Tracy. You know, Titanic is 
                         not just A shipwreck, Titanic is THE 
                         shipwreck. It's the Mount Everest of 
                         shipwrecks.

                                                                    CUT TO:

               INT. HOUSE / CERAMICS STUDIO

               PULL BACK from the screen, showing the CNN report playing on 
               a TV set in the living room of a small rustic house. It is 
               full of ceramics, figurines, folk art, the walls crammed 
               with drawings and paintings... things collected over a 
               lifetime.

               PANNING to show a glassed-in studio attached to the house. 
               Outside it is a quiet morning in Ojai, California. In the 
               studio, amid incredible clutter, an ANCIENT WOMAN is throwing 
               a pot on a potter's wheel. The liquid red clay covers her 
               hands... hands that are gnarled and age-spotted, but still 
               surprisingly strong and supple. A woman in her early forties 
               assists her.

                                     LOVETT (V.O.)
                         I've planned this expedition for 
                         three years, and we're out here 
                         recovering some amazing things... 
                         things that will have enormous 
                         historical and educational value.

                                     CNN REPORTER (V.O.)
                         But it's no secret that education is 
                         not your main purpose. You're a 
                         treasure hunter. So what is the 
                         treasure you're hunting?

                                     LOVETT (V.O.)
                         I'd rather show you than tell you, 
                         and we think we're very close to 
                         doing just that.

               The old woman's name is ROSE CALVERT. Her face is a wrinkled 
               mass, her body shapeless and shrunken under a one-piece 
               African-print dress.

               But her eyes are just as bright and alive as those of a young 
               girl.

               Rose gets up and walks into the living room, wiping pottery 
               clay from her hands with a rag. A Pomeranian dog gets up and 
               comes in with her.

               The younger woman, LIZZY CALVERT, rushes to help her.

                                     ROSE
                         Turn that up please, dear.

                                     REPORTER (V.O.)
                         Your expedition is at the center of 
                         a storm of controversy over salvage 
                         rights and even ethics. Many are 
                         calling you a grave robber.

               TIGHT ON THE SCREEN

                                     LOVETT
                         Nobody called the recovery of the 
                         artifacts from King Tut's tomb grave 
                         robbing. I have museum-trained experts 
                         here, making sure this stuff is 
                         preserved and catalogued properly. 
                         Look at this drawing, which was found 
                         today...

               The video camera pans off Brock to the drawing, in a tray of 
               water. The image of the woman with the necklace FILLS FRAME.

                                     LOVETT
                         ...a piece of paper that's been 
                         underwater for 84 years... and my 
                         team are able to preserve it intact. 
                         Should this have remained unseen at 
                         the bottom of the ocean for eternity, 
                         when we can see it and enjoy it 
                         now...?

               ROSE is galvanized by this image. Her mouth hangs open in 
               amazement.

                                     ROSE
                         I'll be God damned.

                                                                    CUT TO:

               EXT. KELDYSH DECK - NIGHT

               The Mir subs are being launched. Mir Two is already in the 
               water, and Lovett is getting ready to climb into Mir One 
               when Bobby Buell runs up to him.

                                     BUELL
                         There's a satellite call for you.

                                     LOVETT
                         Bobby, we're launching. See these 
                         submersibles here, going in the water? 
                         Take a message.

                                     BUELL
                         No, trust me, you want to take this 
                         call.

                                                                    CUT TO:

               INT. LAB DECK / KELDYSH - NIGHT

               Buell hands Lovett the phone, pushing down the blinking line. 
               The call is from Rose and we see both ends of the 
               conversation. She is in her kitchen with a mystified Lizzy.

                                     LOVETT
                         This is Brock Lovett. What can I do 
                         for you, Mrs...?

                                     BUELL
                         Rose Calvert.

                                     LOVETT
                         ...Mrs. Calvert?

                                     ROSE
                         I was just wondering if you had found 
                         the "Heart of the Ocean" yet, Mr. 
                         Lovett.

               Brock almost drops the phone. Bobby sees his shocked 
               expression...

                                     BUELL
                         I told you you wanted to take this 
                         call.

                                     LOVETT
                              (to Rose)
                         Alright. You have my attention, Rose. 
                         Can you tell me who the woman in the 
                         picture is?

                                     ROSE
                         Oh yes. The woman in the picture is 
                         me.

                                                                    CUT TO:

               EXT. OCEAN - DAY

               SMASH CUT TO AN ENORMOUS SEA STALLION HELICOPTER thundering 
               across the ocean. PAN 180 degrees as it roars past. There is 
               no land at either horizon. The Keldysh is visible in the 
               distance.

               CLOSE ON A WINDOW

               Of the monster helicopter. Rose's face is visible, looking 
               out calmly.

                                                                    CUT TO:

               EXT. KELDYSH - DAY

               Brock and Bodine are watching Mir 2 being swung over the 
               side to start a dive.

                                     BODINE
                         She's a goddamned liar! A nutcase. 
                         Like that... what's her name? That 
                         Anastasia babe.

                                     BUELL
                         They're inbound.

               Brock nods and the three of them head forward to meet the 
               approaching helo.

                                     BODINE
                         She says she's Rose DeWitt Bukater, 
                         right? Rose DeWitt Bukater died on 
                         the Titanic. At the age of 17. If 
                         she'd've lived, she'd be over a 
                         hundred now.

                                     LOVETT
                         A hundred and one next month.

                                     BODINE
                         Okay, so she's a very old goddamned 
                         liar. I traced her as far back as 
                         the 20's... she was working as an 
                         actress in L.A. An actress. Her name 
                         was Rose Dawson. Then she married a 
                         guy named Calvert, moved to Cedar 
                         Rapids, had two kids. Now Calvert's 
                         dead, and from what I've heard Cedar 
                         Rapids is dead.

               The Sea Stallion approaches the ship, BG, forcing Brock to 
               yell over the rotors.

                                     LOVETT
                         And everybody who knows about the 
                         diamond is supposed to be dead... or 
                         on this ship. But she knows about 
                         it. And I want to hear what she has 
                         to say. Got it?

                                                                    CUT TO:

               EXT. KELDYSH HELIPAD

               IN A THUNDERING DOWNBLAST the helicopter's wheels bounce 
               down on the helipad.

               Lovett, Buell and Bodine watch as the HELICOPTER CREW CHIEF 
               hands out about ten suitcases, and then Rose is lowered to 
               the deck in a wheelchair by Keldysh crewmen. Lizzy, ducking 
               unnecessarily under the rotor, follows her out, carrying 
               FREDDY the Pomeranian. The crew chief hands a puzzled Keldysh 
               crewmember a goldfish bowl with several fish in it. Rose 
               does not travel light.

               HOLD ON the incongruous image of this little old lady, looking 
               impossibly fragile amongst all the high tech gear, grungy 
               deck crew and gigantic equipment.

                                     BODINE
                         S'cuse me, I have to go check our 
                         supply of Depends.

                                                                    CUT TO:

               INT. ROSE'S STATEROOM / KELDYSH - DAY

               Lizzy is unpacking Rose's things in the small utilitarian 
               room. Rose is placing a number of FRAMED PHOTOS on the bureau, 
               arranging them carefully next to the fishbowl. Brock and 
               Bodine are in the doorway.

                                     LOVETT
                         Is your stateroom alright?

                                     ROSE
                         Yes. Very nice. Have you met my 
                         granddaughter, Lizzy? She takes care 
                         of me.

                                     LIZZY
                         Yes. We met just a few minutes ago, 
                         grandma. Remember, up on deck?

                                     ROSE
                         Oh, yes.

               Brock glances at Bodine... oh oh. Bodine rolls his eyes. 
               Rose finishes arranging her photographs. We get a general 
               glimpse of them: the usual snapshots... children and 
               grandchildren, her late husband.

                                     ROSE
                         There, that's nice. I have to have 
                         my pictures when I travel. And Freddy 
                         of course.
                              (to the Pomeranian)
                         Isn't that right, sweetie.

                                     LOVETT
                         Would you like anything?

                                     ROSE
                         I should like to see my drawing.

                                                                    CUT TO:

               INT. LAB DECK, PRESERVATION AREA

               Rose looks at the drawing in its tray of water, confronting 
               herself across a span of 84 years. Until they can figure out 
               the best way to preserve it, they have to keep it immersed. 
               It sways and ripples, almost as if alive.

               TIGHT ON Rose's ancient eyes, gazing at the drawing.

               FLASHCUT of a man's hand, holding a conte crayon deftly 
               creating a shoulder and the shape of her hair with two 
               efficient lines.

               THE WOMAN'S FACE IN THE DRAWING

               Dancing under the water.

               FLASHCUT of a man's eyes, just visible over the top of a 
               sketching pad. They look up suddenly right into the LENS. 
               Soft eyes, but fearlessly direct.

               Rose smiles, remembering. Brock has the reference photo of 
               the necklace in his hand.

                                     LOVETT
                         Louis the Sixteenth wore a fabulous 
                         stone, called the Blue Diamond of 
                         the Crown, which disappeared in 1792, 
                         about the time Louis lost everything 
                         from the neck up. The theory goes 
                         that the crown diamond was chopped 
                         too... recut into a heart-like 
                         shape... and it became Le Coeur de 
                         la Mer. The Heart of the Ocean. Today 
                         it would be worth more than the Hope 
                         Diamond.

                                     ROSE
                         It was a dreadful, heavy thing.
                              (she points at the 
                              drawing)
                         I only wore it this once.

                                     LIZZY
                         You actually believe this is you, 
                         grandma?

                                     ROSE
                         It is me, dear. Wasn't I a hot number?

                                     LOVETT
                         I tracked it down through insurance 
                         records... and old claim that was 
                         settled under terms of absolute 
                         secrecy. Do you know who the claiment 
                         was, Rose?

                                     ROSE
                         Someone named Hockley, I should 
                         imagine.

                                     LOVETT
                         Nathan Hockley, right. Pittsburgh 
                         steel tycoon. For a diamond necklace 
                         his son Caledon Hockley bought in 
                         France for his fiancee... you... a 
                         week before he sailed on Titanic. 
                         And the claim was filed right after 
                         the sinking. So the diamond had to've 
                         gone down with the ship.
                              (to Lizzy)
                         See the date?

                                     LIZZY
                         April 14, 1912.

                                     LOVETT
                         If your grandma is who she says she 
                         is, she was wearing the diamond the 
                         day Titanic sank.
                              (to Rose)
                         And that makes you my new best friend. 
                         I will happily compensate you for 
                         anything you can tell us that will 
                         lead to its recovery.

                                     ROSE
                         I don't want your money, Mr. Lovett. 
                         I know how hard it is for people who 
                         care greatly for money to give some 
                         away.

                                     BODINE
                              (skeptical)
                         You don't want anything?

                                     ROSE
                              (indicating the drawing)
                         You may give me this, if anything I 
                         tell you is of value.

                                     LOVETT
                         Deal.
                              (crossing the room)
                         Over here are a few things we've 
                         recovered from your staterooms.

               Laid out on a worktable are fifty or so objects, from mundane 
               to valuable. Rose, shrunken in her chair, can barely see 
               over the table top. With a trembling hand she lifts a tortoise 
               shell hand mirror, inlaid with mother of pearl. She caresses 
               it wonderingly.

                                     ROSE
                         This was mine. How extraordinary! It 
                         looks the same as the last time I 
                         saw it.

               She turns the mirror over and looks at her ancient face in 
               the cracked glass.

                                     ROSE
                         The reflection has changed a bit.

               She spies something else, a silver and moonstone art-nouveau 
               brooch.

                                     ROSE
                         My mother's brooch. She wanted to go 
                         back for it. Caused quite a fuss.

               Rose picks up an ornate art-nouveau HAIR COMB. A jade 
               butterfly takes flight on the ebony handle of the comb. She 
               turns it slowly, remembering. We can see that Rose is 
               experiencing a rush of images and emotions that have lain 
               dormant for eight decades as she handles the butterfly comb.

                                     LOVETT
                         Are you ready to go back to Titanic?

                                                                    CUT TO:

               INT. IMAGING SHACK / KELDYSH

               It is a darkened room lined with TV monitors. IMAGES OF THE 
               WRECK fill the screens, fed from Mir One and Two, and the 
               two ROVs, Snoop Dog and DUNCAN.

                                     BODINE
                         Live from 12,000 feet.

               Rose stares raptly at the screens. She is enthralled by one 
               in particular, an image of the bow railing. It obviously 
               means something to her. Brock is studying her reactions 
               carefully.

                                     BODINE
                         The bow's stuck in the bottom like 
                         an axe, from the impact. Here... I 
                         can run a simulation we worked up on 
                         this monitor over here.

               Lizzy turns the chair so Rose can see the screen of Bodine's 
               computer. As he is calling up the file, he keeps talking.

                                     BODINE
                         We've put together the world's largest 
                         database on the Titanic. Okay, here...

                                     LOVETT
                         Rose might not want to see this, 
                         Lewis.

                                     ROSE
                         No, no. It's fine. I'm curious.

               Bodine starts a COMPUTER ANIMATED GRAPHIC on the screen, 
               which parallels his rapid-fire narration.

                                     BODINE
                         She hits the berg on the starboard 
                         side and it sort of bumps along... 
                         punching holes like a morse code... 
                         dit dit dit, down the side. Now she's 
                         flooding in the

                                     BODINE
                         forward compartments... and the water 
                         spills over the tops of the bulkheads, 
                         going aft. As her bow is going down, 
                         her stern is coming up... slow at 
                         first... and then faster and faster 
                         until it's lifting all that weight, 
                         maybe 20 or 30 thousand tons... out 
                         of the water and the hull can't 
                         deal... so SKRTTT!!
                              (making a sound in 
                              time with the 
                              animation)
                         ...it splits! Right down to the keel, 
                         which acts like a big hinge. Now the 
                         bow swings down and the stern falls 
                         back level... but the weight of the 
                         bow pulls the stern up vertical, and 
                         then the bow section detaches, heading 
                         for the bottom. The stern bobs like 
                         a cork, floods and goes under about 
                         2:20 a.m. Two hours and forty minutes 
                         after the collision.

               The animation then follows the bow section as it sinks. Rose 
               watches this clinical dissection of the disaster without 
               emotion.

                                     BODINE
                         The bow pulls out of its dive and 
                         planes away, almost a half a mile, 
                         before it hits the bottom going maybe 
                         12 miles an hour. KABOOM!

               The bow impacts, digging deeply into the bottom, the animation 
               now follows the stern.

                                     BODINE
                         The stern implodes as it sinks, from 
                         the pressure, and rips apart from 
                         the force of the current as it falls, 
                         landing like a big pile of junk.
                              (indicating the 
                              simulation)
                         Cool huh?

                                     ROSE
                         Thank you for that fine forensic 
                         analysis, Mr. Bodine. Of course the 
                         experience of it was somewhat less 
                         clinical.

                                     LOVETT
                         Will you share it with us?

               Her eyes go back to the screens, showing the sad ruins far 
               below them.

               A VIEW from one of the subs TRACKING SLOWLY over the boat 
               deck. Rose recognizes one of the Wellin davits, still in 
               place. She hears ghostly waltz music. The faint and echoing 
               sound of an officer's voice, English accented, calling "Women 
               and children only".

               FLASH CUTS of screaming faces in a running crowd. Pandemonium 
               and terror. People crying, praying, kneeling on the deck. 
               Just impressions... flashes in the dark.

               Rose Looks at another monitor. SNOOP DOG moving down a rusted, 
               debris-filled corridor. Rose watches the endless row of 
               doorways sliding past, like dark mouths.

               IMAGE OF A CHILD

               Three years old, standing ankle deep in water in the middle 
               of an endless corridor. The child is lost alone, crying.

               Rose is shaken by the flood of memories and emotions. Her 
               eyes well up and she puts her head down, sobbing quietly.

                                     LIZZY
                              (taking the wheelchair)
                         I'm taking her to rest.

                                     ROSE
                         No!

               Her voice is surprisingly strong. The sweet little old lady 
               is gone, replaced by a woman with eyes of steel. Lovett 
               signals everyone to stay quiet.

                                     LOVETT
                         Tell us, Rose.

               She looks from screen to screen, the images of the ruined 
               ship.

                                     ROSE
                         It's been 84 years...

                                     LOVETT
                         Just tell us what you can --

                                     ROSE
                              (holds up her hand 
                              for silence)
                         It's been 84 years... and I can still 
                         smell the fresh paint. The china had 
                         never been used. The sheets had never 
                         been slept in.

               He switches on the minirecorder and sets it near her.

                                     ROSE
                         Titanic was called the Ship of Dreams. 
                         And it was. It really was...

               As the underwater camera rises past the rusted bow rail, WE 
               DISSOLVE / MATCH MOVE to that same railing in 1912...

                                                            MATCH DISSOLVE:

               EXT. SOUTHAMPTON DOCK - DAY

               SHOT CONTINUES IN A FLORIOUS REVEAL as the gleaming white 
               superstructure of Titanic rises mountainously beyond the 
               rail, and above that the buff-colored funnels stand against 
               the sky like the pillars of a great temple. Crewmen move 
               across the deck, dwarfed by the awesome scale of the steamer.

               Southampton, England, April 10, 1912. It is almost noon on 
               sailing day. A crowd of hundreds blackens the pier next to 
               Titanic like ants on a jelly sandwich.

               IN FOREGROUND a gorgeous burgundy RENAULT TOURING CAR swings 
               into frame, hanging from a loading crane. It is lowered toward 
               HATCH #2.

               On the pier horsedrawn vehicles, motorcars and lorries move 
               slowly through the dense throng. The atmosphere is one of 
               excitement and general giddiness. People embrace in tearful 
               farewells, or wave and shout bon voyage wishes to friends 
               and relatives on the decks above.

               A white RENAULT, leading a silver-gray DAIMLER-BENZ, pushes 
               through the crowd leaving a wake in the press of people. 
               Around the handsome cars people are streaming to board the 
               ship, jostling with hustling seamen and stokers, porters, 
               and barking WHITE STAR LINE officials.

               The Renault stops and the LIVERIED DRIVER scurries to open 
               the door for a YOUNG WOMAN dressed in a stunning white and 
               purple outfit, with an enormous feathered hat. She is 17 
               years old and beautiful, regal of bearing, with piercing 
               eyes.

               It is the girl in the drawing. Rose. She looks up at the 
               ship, taking it in with cool appraisal.

                                     ROSE
                         I don't see what all the fuss is 
                         about. It doesn't look any bigger 
                         than the Mauretania.

               A PERSONAL VALET opens the door on the other side of the car 
               for CALEDON HOCKLEY, the 30 year old heir to the elder 
               Hockley's fortune. "Cal" is handsome, arrogant and rich beyond 
               meaning.

                                     CAL
                         You can be blasé about some things, 
                         Rose, but not about Titanic. It's 
                         over a hundred feet longer than 
                         Mauretania, and far more luxurious. 
                         It has squash courts, a Parisian 
                         cafe... even Turkish baths.

               Cal turns and fives his hand to Rose's mother, RUTH DEWITT 
               BUKATER, who descends from the touring car being him. Ruth 
               is a 40ish society empress, from one of the most prominent 
               Philadelphia families. She is a widow, and rules her household 
               with iron will.

                                     CAL
                         Your daughter is much too hard to 
                         impress, Ruth.
                              (indicating a puddle)
                         Mind your step.

                                     RUTH
                              (gazing at the 
                              leviathan)
                         So this is the ship they say is 
                         unsinkable.

                                     CAL
                         It is unsinkable. God himself couldn't 
                         sink this ship.

               Cal speaks with the pride of a host providing a special 
               experience.

               This entire entourage of rich Americans is impeccably turned 
               out, a quintessential example of the Edwardian upper class, 
               complete with servants. Cal's VALET, SPICER LOVEJOY, is a 
               tall and impassive, dour as an undertaker. Behind him emerge 
               TWO MAIDS, personal servants to Ruth and Rose.

               A WHITE STAR LINE PORTER scurries toward them, harried by 
               last minute loading.

                                     PORTER
                         Sir, you'll have to check your baggage 
                         through the main terminal, round 
                         that way --

               Cal nonchalantly hands the man a fiver. The porter's eyes 
               dilate. Five pounds was a monster tip in those days.

                                     CAL
                         I put my faith in you, good sir.
                              (curtly, indicating 
                              Lovejoy)
                         See my man.

                                     PORTER
                         Yes, sir. My pleasure, sir.

               Cal never tires of the effect of money on the unwashed masses.

                                     LOVEJOY
                              (to the porter)
                         These trunks here, and 12 more in 
                         the Daimler. We'll have all this lot 
                         up in the rooms.

               The White Star man looks stricken when he sees the enormous 
               pile of steamer trunks and suitcases loading down the second 
               car, including wooden crates and steel safe. He whistles 
               frantically for some cargo-handlers nearby who come running.

               Cal breezes on, leaving the minions to scramble. He quickly 
               checks his pocket watch.

                                     CAL
                         We'd better hurry. This way, ladies.

               He indicates the way toward the first class gangway. They 
               move into the crowd. TRUDY BOLT, Rose's maid, hustles behind 
               them, laden with bags of her mistress's most recent 
               purchases... things too delicate for the baggage handlers.

               Cal leads, weaving between vehicles and handcarts, hurrying 
               passengers (mostly second class and steerage) and well-
               wishers. Most of the first class passengers are avoiding the 
               smelly press of the dockside crowd by using an elevated 
               boarding bridge, twenty feet above.

               They pass a line of steerage passengers in their coarse wool 
               and tweeds, queued up inside movable barriers like cattle in 
               a chute. A HEALTH OFFICER examines their heads one by one, 
               checking scalp and eyelashes for lice.

               They pass a well-dressed young man cranking the handle of a 
               wooden Biograph "cinematograph" camera mounted on a tripod. 
               DANIEL MARVIN (whose father founded the Biograph Film Studio) 
               is filming his young bride in front of the Titanic. MARY 
               MARVIN stands stiffly and smiles, self conscious.

                                     DANIEL
                         Look up at the ship, darling, that's 
                         it. You're amazed! You can't believe 
                         how big it is! Like a mountain. That's 
                         great.

               Mary Marvin, without an acting fiber in her body, does a bad 
               Clara Bow pantomime of awe, hands raised.

               Cal is jostled by two yelling steerage boys who shove past 
               him. And he is bumped again a second later by the boys' 
               father.

                                     CAL
                         Steady!!

                                     MAN
                         Sorry squire!

               The Cockney father pushes on, after his kids, shouting.

                                     CAL
                         Steerage swine. Apparently missed 
                         his annual bath.

                                     RUTH
                         Honestly, Cal, if you weren't forever 
                         booking everything at the last 
                         instant, we could have gone through 
                         the terminal instead of running along 
                         the dock like some squalid immigrant 
                         family.

                                     CAL
                         All part of my charm, Ruth. At any 
                         rate, it was my darling fiancee's 
                         beauty rituals which made us late.

                                     ROSE
                         You told me to change.

                                     CAL
                         I couldn't let you wear black on 
                         sailing day, sweetpea. It's bad luck.

                                     ROSE
                         I felt like black.

               Cal guides them out of the path of a horse-drawn wagon loaded 
               down with two tons of OXFORD MARMALADE, in wooden cases, for 
               Titanic's Victualling Department.

                                     CAL
                         Here I've pulled every string I could 
                         to book us on the grandest ship in 
                         history, in her most luxurious 
                         suites... and you act as if you're 
                         going to your execution.

               Rose looks up as the hull of Titanic looms over them... a 
               great iron wall, Bible black and sever. Cal motions her 
               forward, and she enters the gangway to the D Deck doors with 
               a sense of overwhelming dread.

                                     OLD ROSE (V.O.)
                         It was the ship of dreams... to 
                         everyone else. To me it was a slave 
                         ship, taking me back to America in 
                         chains.

               CLOSE ON CAL'S HAND IN SLOW-MOTION

               As it closes possessively over Rose's arm. He escorts her up 
               the gangway and the black hull of Titanic swallows them.

                                     OLD ROSE (V.O.)
                         Outwardly I was everything a well 
                         brought up girl should be. Inside, I 
                         was screaming.

                                                                    CUT TO:

               A SCREAMING BLAST

               From the mighty triple steam horns on Titanic's funnels, 
               bellowing their departure warning.

                                                                    CUT TO:

               EXT. SOUTHAMPTON DOCKS / TITANIC - DAY

               A VIEW OF TITANIC from several blocks away, towering above 
               the terminal buildings like the skyline of a city. The 
               steamer's whistle echoes across Southampton.

               PULL BACK, revealing that we were looking through a window, 
               and back further to show the smoky inside of a pub. It is 
               crowded with dockworkers and ship's crew.

               Just inside the window, a poker game is in progress. FOUR 
               MEN, in working class clothes, play a very serious hand.

               JACK DAWSON and FABRIZIO DE ROSSI, both about 20, exchange a 
               glance as the other two players argue in Swedish. Jack is 
               American, a lanky drifter with his hair a little long for 
               the standards of the times. He is also unshaven, and his 
               clothes are rumpled from sleeping in them. He is an artist, 
               and has adopted the bohemian style of art scene in Paris. He 
               is also very self-possessed and sure-footed for 20, having 
               lived on his own since 15.

               The TWO SWEDES continue their sullen argument, in Swedish.

                                     OLAF
                              (subtitled)
                         You stupid fishhead. I can't believe 
                         you bet our tickets.

                                     SVEN
                              (subtitled)
                         You lost our money. I'm just trying 
                         to get it back. Now shutup and take 
                         a card.

                                     JACK
                              (jaunty)
                         Hit me again, Sven.

               Jack takes the card and slips it into his hand.

               EXTREME CLOSEUP JACK'S EYES

               They betray nothing.

               CLOSE ON FABRIZIO

               Licking his lips nervously as he refuses a card.

               EXTREME CLOSEUP STACK

               In the middle of the table. Bills and coins from four 
               counrties. This has been going on for a while. Sitting on 
               top of the money are two 3RD CLASS TICKETS for RMS TITANIC.

               The Titanic's whistle blows again. Final warning.

                                     JACK
                         The moment of truth boys. Somebody's 
                         life's about to change.

               Fabrizio puts his cards down. So do the Swedes. Jack holds 
               his close.

                                     JACK
                         Let's see... Fabrizio's got niente. 
                         Olaf, you've got squat. Sven, uh 
                         oh... two pair... mmm.
                              (turns to his friend)
                         Sorry Fabrizio.

                                     FABRIZIO
                         What sorry? What you got? You lose 
                         my money?? Ma va fa'n culo testa di 
                         cazzo --

                                     JACK
                         Sorry, you're not gonna see your 
                         mama again for a long time...

               He slaps a full house down on the table.

                                     JACK
                              (grinning)
                         'Cause you're goin' to America!! 
                         Full house boys!

                                     FABRIZIO
                         Porca Madonna!! YEEAAAAA!!!

               The table explodes into shouting in several languages. Jack 
               rakes in the money and the tickets.

                                     JACK
                              (to the Swedes)
                         Sorry boys. Three of a kind and a 
                         pair. I'm high and you're dry and...
                              (to Fabrizio)
                         we're going to --

                                     FABRIZIO / JACK
                         L'AMERICA!!!

               Olaf balls up one huge farmer's fist. We think he's going to 
               clobber Jack, but he swings round and punches Sven, who flops 
               backward onto the floor and sits there, looking depressed. 
               Olaf forgets about Jack and Fabrizio, who are dancing around, 
               and goes into a rapid harangue of his stupid cousin.

               Jack kisses the tickets, then jumps on Fabrizio's back and 
               rides him around the pub. It's like they won the lottery.

                                     JACK
                         Goin' home... to the land o' the 
                         free and the home of the real hot-
                         dogs! On the TITANIC!! We're ridin' 
                         in high style now! We're practically 
                         goddamned royalty, ragazzo mio!!

                                     FABRIZIO
                         You see? Is my destinio!! Like I 
                         told you. I go to l'America!! To be 
                         a millionaire!!
                              (to pubkeeper)
                         Capito?? I go to America!!

                                     PUBKEEPER
                         No, mate. Titanic go to America. In 
                         five minutes.

                                     JACK
                         Shit!! Come on, Fabri!
                              (grabbing their stuff)
                         Come on!!
                              (to all, grinning)
                         It's been grand.

               They run for the door.

                                     PUBKEEPER
                         'Course I'm sure if they knew it was 
                         you lot comin', they'd be pleased to 
                         wait!

                                                                    CUT TO:

               EXT. TERMINAL - TITANIC

               Jack and Fabrizio, carrying everything they own in the world 
               in the kit bags on their shoulders, sprint toward the pier. 
               They tear through milling crowds next to the terminal. Shouts 
               go up behind them as they jostle slow-moving gentlemen. They 
               dodge piles of luggage, and weave through groups of people. 
               They burst out onto the pier and Jack comes to a dead stop... 
               staring at the cast wall of the ship's hull, towering seven 
               stories above the wharf and over an eighth of a mile long. 
               The Titanic is monstrous.

               Fabrizio runs back and grabs Jack, and they sprint toward 
               the third class gangway aft, at E deck. They reach the bottom 
               of the ramp just as SIXTH OFFICER MOODY detaches it at the 
               top. It starts to swing down from the gangway doors.

                                     JACK
                         Wait!! We're passengers!

               Flushed and panting, he waves the tickets.

                                     MOODY
                         Have you been through the inspection 
                         queue?

                                     JACK
                              (lying cheerfully)
                         Of course! Anyway, we don't have 
                         lice, we're Americans.
                              (glances at Fabrizio)
                         Both of us.

                                     MOODY
                              (testy)
                         Right, come aboard.

               Moody has QUARTERMASTER ROWE reattach the gangway. Jack and 
               Fabrizio come aboard. Moody glances at the tickets, then 
               passes Jack and Fabrizio through to Rowe. Rowe looks at the 
               names on the tickets to enter them in the passenger list.

                                     ROWE
                         Gundersen. And...
                              (reading Fabrizio's)
                         Gundersen.

               He hands the tickets back, eyeing Fabrizio's Mediterranean 
               looks suspiciously.

                                     JACK
                              (grabbing Fabrizio's 
                              arm)
                         Come on, Sven.

               Jack and Fabrizio whoop with victory as they run down the 
               white-painted corridero... grinning from ear to ear.

                                     JACK
                         We are the luckiest sons of bitches 
                         in the world!

                                                                    CUT TO:

               EXT. TITANIC AND DOCK - DAY

               The mooring lines, as big around as a man's arm, are dropped 
               into the water. A cheer goes up on the pier as SEVEN TUGS 
               pull the Titanic away from the quay.

                                                                    CUT TO:

               EXT. AFT WELL DECK / POOP DECK - DAY

               JACK AND FABRIZIO burst through a door onto the aft well 
               deck. TRACKING WITH THEM as they run across the deck and up 
               the steel stairs to the poop deck. They get to the rail and 
               Jack starts to yell and wave to the crowd on the dock.

                                     FABRIZIO
                         You know somebody?

                                     JACK
                         Of course not. That's not the point.
                              (to the crowd)
                         Goodbye! Goodbye!! I'll miss you!

               Grinning, Fabrizio joins in, adding his voice to the swell 
               of voices, feeling the exhilaration of the moment.

                                     FABRIZIO
                         Goodbye! I will never forget you!!

                                                                    CUT TO:

               EXT. SOUTHAMPTON DOCK - DAY

               The crowd of cheering well-wishers waves heartily as a black 
               wall of metal moves past them. Impossibly tiny figures wave 
               back from the ship's rails. Titanic gathers speed.

                                                                    CUT TO:

               EXT. RIVER TEST - DAY

               IN A LONG LENS SHOT the prow of Titanic FILLS FRAME behind 
               the lead tug, which is dwarfed. The bow wave spreads before 
               the mighty plow of the liner's hull as it moves down the 
               River Test toward the English Channel.

                                                                    CUT TO:

               INT. THIRD CLASS BERTHING / G-DECK FORWARD - DAY

               Jack and Fabrizio walk down a narrow corridor with doors 
               lining both sides like a college dorm. Total confusion as 
               people argue over luggage in several languages, or wander in 
               confusion in the labyrinth. They pass emigrants studying the 
               signs over the doors, and looking up the words in phrase 
               books.

               They find their berth. It is a modest cubicle, painted enamel 
               white, with four bunks. Exposed pipes overhead. The other 
               two guys are already there. OLAUS and BJORN GUNDERSEN.

               Jack throws his kit on one open bunk, while Fabrizio takes 
               the other.

                                     BJORN
                              (in Swedish; subtitled)
                         Where is Sven?

                                                                    CUT TO:

               INT. SUITE B-52-56 - DAY

               By contrast, the so-called "Millionaire Suite" is in the 
               Empire style, and comprises two bedrooms, a bath, WC, wardrobe 
               room, and a large sitting room. In addition there is a private 
               50 foot promenade deck outside.

               A room service waiter pours champagne into a tulip glass of 
               orange juice and hands the Bucks Fizz to Rose. She is looking 
               through her new paintings. There is a Monet of water lilies, 
               a Degas of dancers, and a few abstract works. They are all 
               unknown paintings... lost works.

               Cal is out on the covered deck, which has potted trees and 
               vines on trellises, talking through the doorway to Rose in 
               the sitting room.

                                     CAL
                         Those mud puddles were certainly a 
                         waste of money.

                                     ROSE
                              (looking at a cubist 
                              portrait)
                         You're wrong. They're fascinating. 
                         Like in a dream... there's truth 
                         without logic. What's his name 
                         again...?
                              (reading off the canvas)
                         Picasso.

                                     CAL
                              (coming into the 
                              sitting room)
                         He'll never amount to a thing, trust 
                         me. At least they were cheap.

               A porter wheels Cal's private safe (which we recognize) into 
               the room on a handtruck.

                                     CAL
                         Put that in the wardrobe.

               IN THE BEDROOM

               Rose enters with the large Degas of the dancers. She sets it 
               on the dresser, near the canopy bed. Trudy is already in 
               there, hanging up some of Rose's clothes.

                                     TRUDY
                         It smells so brand new. Like they 
                         built it all just for us. I mean... 
                         just to think that tonight, when I 
                         crawl between the sheets, I'll be 
                         the first --

               Cal appears in the doorway of the bedroom.

                                     CAL
                              (looking at Rose)
                         And when I crawl between the sheets 
                         tonight, I'll still be the first.

                                     TRUDY
                              (blushing at the 
                              innuendo)
                         S'cuse me, Miss.

               She edges around Cal and makes a quick exit. Cal comes up 
               behind Rose and puts his hands on her shoulders. An act of 
               possession, not intimacy.

                                     CAL
                         The first and only. Forever.

               Rose's expression shows how bleak a prospect this is for 
               her, now.

                                                                    CUT TO:

               EXT. CHERBOURG HARBOR, FRANCE - LATE DUSK

               Titanic stands silhouetted against a purple post-sunset sky. 
               She is lit up like a floating palace, and her thousand 
               portholes reflect in the calm harbor waters. The 150 foot 
               tender Nomadic lies-to alongside, looking like a rowboat. 
               The lights of a Cherbourg harbor complete the postcard image.

                                                                    CUT TO:

               INT. FIRST CLASS RECEPTION / D-DECK

               Entering the first class reception room from the tender are 
               a number of prominent passengers. A BROAD-SHOULDERED WOMAN 
               in an enormous feathered hat comes up the gangway, carrying 
               a suitcase in each hand, a spindly porter running to catch 
               up with her to take the bags.

                                     WOMAN
                         Well, I wasn't about to wait all day 
                         for you, sonny. Take 'em the rest of 
                         the way if you think you can manage.

                                     OLD ROSE (V.O.)
                         At Cherbourg a woman came aboard 
                         named Margaret Brown, but we all 
                         called her Molly. History would call 
                         her the Unsinkable Molly Brown. Her 
                         husband had struck gold someplace 
                         out west, and she was what mother 
                         called "new money".

               At 45, MOLLY BROWN is a tough talking straightshooter who 
               dresses in the finery of her genteel peers but will never be 
               one of them.

                                     OLD ROSE (V.O.)
                         By the next afternoon we had made 
                         our final stop and we were steaming 
                         west from the coast of Ireland, with 
                         nothing out ahead of us but ocean...

                                                                    CUT TO:

               EXT. BOW - DAY

               The ship glows with the warm creamy light of late afternoon. 
               Jack and Fabrizio stand right at the bow gripping the curving 
               railing so familiar from images of the wreck. Jack leans 
               over, looking down fifty feet to where the prow cuts the 
               surface like a knife, sending up two glassy sheets of water.

                                                                    CUT TO:

               INT. / EXT. TITANIC - SERIES OF SCENES - DAY

               ON THE BRIDGE, CAPTAIN SMITH turns from the binnacle to FIRST 
               OFFICER WILLIAM MURDOCH.

                                     CAPTAIN SMITH
                         Take her to sea Mister Murdoch. Let's 
                         stretch her legs.

               Murdoch moves the engine telegraph lever to ALL AHEAD FULL.

               Now begins a kind of musical/visual setpiece... an ode to 
               the great ship. The music is rhythmic, surging forward, with 
               a soaring melody that addresses the majesty and optimism of 
               the ship of dreams.

               IN THE ENGINE ROOM

               The telegraph clangs and moves to "All Ahead Full".

                                     CHIEF ENGINEER BELL
                         All ahead full!

               On the catwalk THOMAS ANDREWS, the shipbuilder, watches 
               carefully as the engineers and greasers scramble to adjust 
               valves. Towering above them are the twin RECIPROCATING 
               engines, four stories tall, their ten-foot-long connecting 
               rods surging up and down with the turning of the massive 
               crankshafts. The engines thunder like the footfalls of 
               marching giants.

               IN THE BOILER ROOMS

               The STOKERS chant a song as they hurl coal into the roaring 
               furnaces. The "black gang" are covered with sweat and coal 
               dust, their muscles working like part of the machinery as 
               they toil in the hellish glow.

               UNDERWATER

               The enormous bronze screws chop through the water, hurling 
               the steamer forward and churning up a vortex of foam that 
               lingers for miles behind the juggernaut ship. Smoke pours 
               from the funnels as --

               The water flares higher at the bow as the ship's speeds 
               builds. THE CAMERA SWEEPS UP the prow to find Jack, the wind 
               streaming through his hair and --

               Captain Smith steps out of the enclosed bridge onto the wing. 
               He stands with his hands on the rail, looking every bit the 
               storybook picture of a Captain... a great patriarch of the 
               sea.

                                     FIRST OFFICER MURDOCH
                         Twenty one knots, sir!

                                     SMITH
                         She's got a bone in her teeth now, 
                         eh, Mr. Murdoch.

               Smith accepts a cup of tea from FIFTH OFFICER LOWE. He 
               contentedly watches the white V of water hurled outward from 
               the bows like an expression of his own personal power. They 
               are invulnerable, towering over the sea.

               AT THE BOW Jack and Fabrizio lean far over, looking down.

               In the glassy bow-wave two dolphins appear, under the water, 
               running fast just in front of the steel blade of the prow. 
               They do it for the sheer joy and exultation of motion. Jack 
               watches the dolphins and grins. They breach, jumping clear 
               of the water and then dive back, crisscrossing in front of 
               the bow, dancing ahead of the juggernaut.

               Fabrizio looks forward across the Atlantic, staring into the 
               sunsparkles.

                                     FABRIZIO
                         I can see the Statue of Liberty 
                         already.
                              (grinning at Jack)
                         Very small... of course.

               THE CAMERA ARCS around them, until they are framed against 
               the sea.

               NOW WE PULL BACK, across the forecastle deck. Rising, as we 
               continue back, and the ships rolls endlessly forward 
               underneath. Over the bridge wing, along the boat deck until 
               her funnels come INTO FRAME besides us and march past like 
               the pillars of heaven, one by one. We pull back and up, until 
               we are looking down the funnels, and the people strolling on 
               the decks and standing at the rail become antlike.

               And still we pull back until the great lady is seen whole in 
               a gorgeous aerial portrait, black and severe in her majesty.

                                     ISMAY (V.O.)
                         She is the largest moving object 
                         ever made by the hand of man in all 
                         history...

                                                                    CUT TO:

               INT. PALM COURT RESTAURANT - DAY

               CLOSE ON J. BRUCE ISMAY, Managing Director of White Star 
               Line.

                                     ISMAY
                         ...and our master shipbuilder, Mr. 
                         Andrews here, designed her from the 
                         keel plates up.

               He indicates a handsome 39 year old Irish gentlemen to his 
               right, THOMAS ANDREWS, of Harland and Wolf Shipbuilders.

               WIDER

               Showing the group assembled for lunch the next day. Ismay 
               seated with Cal, Rose, Ruth, Molly Brown and Thomas Andrews 
               in the Palm Court, a beautiful sunny spot enclosed by high 
               arched windows.

                                     ANDREWS
                              (disliking the 
                              attention)
                         Well, I may have knocked her together, 
                         but the idea was Mr. Ismay's. He 
                         envisioned a steamer so grand in 
                         scale, and so luxurious in its 
                         appointments, that its supremacy 
                         would never be challenged. And here 
                         she is...
                              (he slaps the table)
                         ...willed into solid reality.

                                     MOLLY
                         Why're ships always bein' called 
                         "she"? Is it because men think half 
                         the women around have big sterns and 
                         should be weighed in tonnage?
                              (they all laugh)
                         Just another example of the men 
                         settin' the rules their way.

               The waiter arrives to take orders. Rose lights a cigarette.

                                     RUTH
                         You know I don't like that, Rose.

                                     CAL
                         She knows.

               Cal takes the cigarette from her and stubs it out.

                                     CAL
                              (to the waiter)
                         We'll both have the lamb. Rare, with 
                         a little mint sauce.
                              (to Rose, after the 
                              waiter moves away)
                         You like lamb, don't you sweetpea?

               Molly is watching the dynamic between Rose, Cal and Ruth.

                                     MOLLY
                         So, you gonna cut her meat for her 
                         too there, Cal?
                              (turning to Ismay)
                         Hey, who came up with the name 
                         Titanic? You, Bruce?

                                     ISMAY
                         Yes, actually. I wanted to convey 
                         sheer size. And size means stability, 
                         luxury... and safety --

                                     ROSE
                         Do you know of Dr. Freud? His ideas 
                         about the male preoccupation with 
                         size might be of particular interest 
                         to you, Mr. Ismay.

               Andrews chockes on his breadstick, suppressing laughter.

                                     RUTH
                         My God, Rose, what's gotten into --

                                     ROSE
                         Excuse me.

               She stalks away.

                                     RUTH
                              (mortified)
                         I do apologize.

                                     MOLLY
                         She's a pistol, Cal. You sure you 
                         can handle her?

                                     CAL
                              (tense but feigning 
                              unconcern)
                         Well, I may have to start minding 
                         what she reads from now on.

                                                                    CUT TO:

               EXT. POOP DECK / AFTER DECKS - DAY

               Jack sits on a bench in the sun. Titanic's wake spreads out 
               behind him to the horizon. He has his knees pulled up, 
               supporting a leather bound sketching pad, his only valuable 
               possession. With conte crayon he draws rapidly, using sure 
               strokes. An emigrant from Manchester named CARTMELL has his 
               3 year old daughter CORA standing on the lower rung of the 
               rail. She is leaned back against his beer barrel of a stomach, 
               watching the seagulls.

               THE SKETCH captures them perfectly, with a great sense of 
               the humanity of the moment. Jack is good. Really good. 
               Fabrizio looks over Jack's shoulder. He nods appreciatively.

               TOMMY RYAN, a scowling young Irish emigrant, watches as a 
               crewmember comes by, walking three small dogs around the 
               deck. One of them, a BLACK FRENCH BULLDOG, is among the 
               ugliest creatures on the planet.

                                     TOMMY
                         That's typical. First class dogs 
                         come down here to take a shit.

               Jack looks up from his sketch.

                                     JACK
                         That's so we know where we rank in 
                         the scheme of things.

                                     TOMMY
                         Like we could forget.

               Jack glances across the well deck. At the aft railing of B 
               deck promenade stands ROSE, in a long yellow dress and white 
               gloves.

               CLOSE ON JACK

               Unable to take his eyes off of her. They are across from 
               each other, about 60 feet apart, with the well deck like a 
               valley between them. She on her promontory, he on his much 
               lower one. She stares down at the water.

               He watches her unpin her elaborate hat and take it off. She 
               looks at the frilly absurd thing, then tosses it over the 
               rail. It sails far down to the water and is carried away, 
               astern. A spot of yellow in the vast ocean. He is riveted by 
               her. She looks like a figure in a romantic novel, sad and 
               isolated.

               Fabrizio taps Tommy and they both look at Jack gazing at 
               Rose. Fabrizio and Tommy grin at each other.

               Rose turns suddenly and looks right at Jack. He is caught 
               staring, but he doesn't look away. She does, but then looks 
               back. Their eyes meet across the space of the well deck, 
               across the gulf between worlds.

               Jack sees a man (Cal) come up behind her and take her arm. 
               She jerks her arm away. They argue in pantomime. She storms 
               away, and he goes after her, disappearing along the A-deck 
               promenade. Jack stares after her.

                                     TOMMY
                         Forget it, boyo. You'd as like have 
                         angels fly out o' yer arse as get 
                         next to the likes o' her.

                                                                    CUT TO:

               INT. FIRST CLASS DINING SALOON - NIGHT

               SLOWLY PUSHING IN ON ROSE as she sits, flanked by people in 
               heated conversation. Cal and Ruth are laughing together, 
               while on the other side LADY DUFF-GORDON is holding forth 
               animatedly. We don't hear what they are saying. Rose is 
               staring at her plate, barely listening to the inconsequential 
               babble around her.

                                     OLD ROSE (V.O.)
                         I saw my whole life as if I'd already 
                         lived it... an endless parade of 
                         parties and cotillions, yachts and 
                         polo matches... always the same narrow 
                         people, the same mindless chatter. I 
                         felt like I was standing at a great 
                         precipice, with no one to pull me 
                         back, no one who cared... or even 
                         noticed.

               ANGLE BENEATH TABLE

               Showing Rose's hand, holding a tiny fork from her crab salad. 
               She pokes the crab-fork into the skin of her arm, harder and 
               harder until it draws blood.

                                                                    CUT TO:

               INT. CORRIDOR / B DECK - NIGHT

               Rose walks along the corridor. A steward coming the other 
               way greets her, and she nods with a slight smile. She is 
               perfectly composed.

                                                                    CUT TO:

               INT. ROSE'S BEDROOM - NIGHT

               She enters the room. Stands in the middle, staring at her 
               reflection in the large vanity mirror. Just stands there, 
               then --

               With a primal, anguished cry she claws at her throat, ripping 
               off her pearl necklace, which explodes across the room. In a 
               frenzy she tears at herself, her clothes, her hair... then 
               attacks the room. She flings everything off the dresser and 
               it flies clattering against the wall. She hurls a handmirror 
               against the vanity, cracking it.

                                                                    CUT TO:

               EXT. A DECK PROMENADE, AFT - NIGHT

               Rose runs along the B deck promenade. She is dishevelled, 
               her hair flying. She is crying, her cheeks streaked with 
               tears. But also angry, furious! Shaking with emotions she 
               doesn't understand... hatred, self-hatred, desperation. A 
               strolling couple watch her pass. Shocked at the emotional 
               display in public.

                                                                    CUT TO:

               EXT. POOP DECK - NIGHT

               Jack is kicked back on one of the benches gazing at the stars 
               blazing gloriously overhead. Thinking artist thoughts and 
               smoking a cigarette.

               Hearing something, he turns as Rose runs up the stairs from 
               the well deck. They are the only two on the stern deck, except 
               for QUARTERMASTER ROWE, twenty feet above them on the docking 
               bridge catwalk. She doesn't see Jack in the shadows, and 
               runs right past him.

               TRACKING WITH ROSE as she runs across the deserted fantail. 
               Her breath hitches in an occasional sob, which she suppresses. 
               Rose slams against the base of the stern flagpole and clings 
               there, panting. She stares out at the black water.

               Then starts to climb over the railing. She has to hitch her 
               long dress way up, and climbing is clumsy. Moving methodically 
               she turns her body and gets her heels on the white-painted 
               gunwale, her back to the railing, facing out toward blackness. 
               60 feet below her, the massive propellers are churning the 
               Atlantic into white foam, and a ghostly wake trails off toward 
               the horizon.

               IN A LOW ANGLE, we see Rose standing like a figurehead in 
               reverse. Below her are the huge letters of the name "TITANIC".

               She leans out, her arms straightening... looking down 
               hypnotized, into the vortex below her. Her dress and hair 
               are lifted by the wind of the ship's movement. The only sound, 
               above the rush of water below, is the flutter and snap of 
               the big Union Jack right above her.

                                     JACK
                         Don't do it.

               She whips her head around at the sound of his voice. It takes 
               a second for her eyes to focus.

                                     ROSE
                         Stay back! Don't come any closer!

               Jack sees the tear tracks on her cheeks in the faint glow 
               from the stern running lights.

                                     JACK
                         Take my hand. I'll pull you back in.

                                     ROSE
                         No! Stay where you are. I mean it. 
                         I'll let go.

                                     JACK
                         No you won't.

                                     ROSE
                         What do you mean no I won't? Don't 
                         presume to tell me what I will and 
                         will not do. You don't know me.

                                     JACK
                         You would have done it already. Now 
                         come on, take my hand.

               Rose is confused now. She can't see him very well through 
               the tears, so she wipes them with one hand, almost losing 
               her balance.

                                     ROSE
                         You're distracting me. Go away.

                                     JACK
                         I can't. I'm involved now. If you 
                         let go I have to jump in after you.

                                     ROSE
                         Don't be absurd. You'll be killed.

               He takes off his jacket.

                                     JACK
                         I'm a good swimmer.

               He starts unlacing his left shoe.

                                     ROSE
                         The fall alone would kill you.

                                     JACK
                         It would hurt. I'm not saying it 
                         wouldn't. To be honest I'm a lot 
                         more concerned about the water being 
                         so cold.

               She looks down. The reality factor of what she is doing is 
               sinking in.

                                     ROSE
                         How cold?

                                     JACK
                              (taking off his left 
                              shoe)
                         Freezing. Maybe a couple degrees 
                         over.

               He starts unlacing his right shoe.

                                     JACK
                         Ever been to Wisconsin?

                                     ROSE
                              (perplexed)
                         No.

                                     JACK
                         Well they have some of the coldest 
                         winters around, and I grew up there, 
                         near Chippewa Falls. Once when I was 
                         a kid me and my father were ice-
                         fishing out on Lake Wissota... ice-
                         fishing's where you chop a hole in 
                         the --

                                     ROSE
                         I know what ice fishing is!

                                     JACK
                         Sorry. Just... you look like kind of 
                         an indoor girl. Anyway, I went through 
                         some thin ice and I'm tellin' ya, 
                         water that cold... like that right 
                         down there... it hits you like a 
                         thousand knives all over your body. 
                         You can't breath, you can't think... 
                         least not about anything but the 
                         pain.
                              (takes off his other 
                              shoe)
                         Which is why I'm not looking forward 
                         to jumping in after you. But like I 
                         said, I don't see a choice. I guess 
                         I'm kinda hoping you'll come back 
                         over the rail and get me off the 
                         hook here.

                                     ROSE
                         You're crazy.

                                     JACK
                         That's what everybody says. But with 
                         all due respect, I'm not the one 
                         hanging off the back of a ship.

               He slides one step closer, like moving up on a spooked horse.

                                     JACK
                         Come on. You don't want to do this. 
                         Give me your hand.

               Rose stares at this madman for a long time. She looks at his 
               eyes and they somehow suddenly seem to fill her universe.

                                     ROSE
                         Alright.

               She unfastens one hand from the rail and reaches it around 
               toward him. He reaches out to take it, firmly.

                                     JACK
                         I'm Jack Dawson.

                                     ROSE
                              (voice quavering)
                         Pleased to meet you, Mr. Dawson.

               Rose starts to turn. Now that she has decided to live, the 
               height is terrifying. She is overcome by vertigo as she shifts 
               her footing, turning to face the ship. As she starts to climb, 
               her dress gets in the way, and one foot slips off the edge 
               of the deck.

               She plunges, letting out a piercing SHRIEK. Jack, gripping 
               her hand, is jerked toward the rail. Rose barely grabs a 
               lower rail with her free hand.

               QUARTERMASTER ROWE, up on the docking bridge hears the scream 
               and heads for the ladder.

                                     ROSE
                         HELP! HELP!!

                                     JACK
                         I've got you. I won't let go.

               Jack holds her hand with all his strength, bracing himself 
               on the railing with his other hand. Rose tries to get some 
               kind of foothold on the smooth hull. Jack tries to lift her 
               bodily over the railing. She can't get any footing in her 
               dress and evening shoes, and she slips back. Rose SCREAMS 
               again.

               Jack, awkwardly clutching Rose by whatever he can get a grip 
               on as she flails, gets her over the railing. They fall 
               together onto the deck in a tangled heap, spinning in such a 
               way that Jack winds up slightly on top of her.

               Rowe slides down the ladder from the docking bridge like 
               it's a fire drill and sprints across the fantail.

                                     ROWE
                         Here, what's all this?!

               Rowe runs up and pulls Jack off of Rose, revealing her 
               dishevelled and sobbing on the deck. Her dress is torn, and 
               the hem is pushing up above her knees, showing one ripped 
               stocking. He looks at Jack, the shaggy steerage man with his 
               jacket off, and the first class lady clearly in distress, 
               and starts drawing conclusions. Two seamen chug across the 
               deck to join them.

                                     ROWE
                              (to Jack)
                         Here you, stand back! Don't move an 
                         inch!
                              (to the seamen)
                         Fetch the Master at Arms.

                                                                    CUT TO:

               EXT. POOP DECK - NIGHT

               A few minutes later. Jack is being detained by the burly 
               MASTER AT ARMS, the closest thing to a cop on board. He is 
               handcuffing Jack. Cal is right in front of Jack, and furious. 
               He has obviously just rushed out here with Lovejoy and another 
               man, and none of them have coats over their black tie evening 
               dress. The other man is COLONEL ARCHIBALD GRACIE, a 
               mustachioed blowhard who still has his brandy snifter. He 
               offers it to Rose, who is hunched over crying on a bench 
               nearby, but she waves it away. Cal is more concerned with 
               Jack. He grabs him by the lapels.

                                     CAL
                         What made you think you could put 
                         your hands on my fiancee?! Look at 
                         me, you filth! What did you think 
                         you were doing?!

                                     ROSE
                         Cal, stop! It was an accident.

                                     CAL
                         An accident?!

                                     ROSE
                         It was... stupid really. I was leaning 
                         over and I slipped.

               Rose looks at Jack, getting eye contact.

                                     ROSE
                         I was leaning way over, to see the... 
                         ah... propellers. And I slipped and 
                         I would have gone overboard... and 
                         Mr. Dawson here saved me and he almost 
                         went over himself.

                                     CAL
                         You wanted to see the propellers?

                                     GRACIE
                              (shaking his head)
                         Women and machinery do not mix.

                                     MASTER AT ARMS
                              (to Jack)
                         Was that the way of it?

               Rose is begging him with her eyes not to say what really 
               happened.

                                     JACK
                         Uh huh. That was pretty much it.

               He looks at Rose a moment longer. Now they have a secret 
               together.

                                     COLONEL GRACIE
                         Well! The boy's a hero then. Good 
                         for you son, well done!
                              (to Cal)
                         So it's all's well and back to our 
                         brandy, eh?

               Jack is uncuffed. Cal gets Rose to her feet and moving.

                                     CAL
                              (rubbing her arms)
                         Let's get you in. You're freezing.

               Cal is leaving without a second thought for Jack.

                                     GRACIE
                              (low)
                         Ah... perhaps a little something for 
                         the boy?

                                     CAL
                         Oh, right. Mr. Lovejoy. A twenty 
                         should do it.

                                     ROSE
                         Is that the going rate for saving 
                         the woman you love?

                                     CAL
                         Rose is displeased. Mmm... what to 
                         do?

               Cal turns back to Jack. He appraises him condescendingly... 
               a steerage ruffian, unwashed and ill-mannered.

                                     CAL
                         I know.
                              (to Jack)
                         Perhaps you could join us for dinner 
                         tomorrow, to regale our group with 
                         your heroic tale?

                                     JACK
                              (looking straight at 
                              Rose)
                         Sure. Count me in.

                                     CAL
                         Good. Settled then.

               Cal turns to go, putting a protective arm around Rose. He 
               leans close to Gracie as they walk away.

                                     CAL
                         This should be amusing.

                                     JACK
                              (as Lovejoy passes)
                         Can I bum a cigarette?

               Lovejoy smoothly draws a silver cigarette case from his jacket 
               and snaps it open. Jack takes a cigarette, then another, 
               popping it behind his ear for later. Lovejoy lights Jack's 
               cigarette.

                                     LOVEJOY
                         You'll want to tie those.
                              (Jack looks at his 
                              shoes)
                         Interesting that the young lady 
                         slipped so mighty all of a sudden 
                         and you still had time to take of 
                         your jacket and shoes. Mmmm?

               Lovejoy's expression is bland, but the eyes are cold. He 
               turns away to join his group.

                                                                    CUT TO:

               INT. ROSE'S BEDROOM - NIGHT

               As she undresses for bed Rose sees Cal standing in her 
               doorway, reflected in the cracked mirror of her vanity. He 
               comes toward her.

                                     CAL
                              (unexpectedly tender)
                         I know you've been melancholy, and I 
                         don't pretend to know why.

               From behind his back he hands her a large black velvet jewel 
               case. She takes it, numbly.

                                     CAL
                         I intended to save this till the 
                         engagement gals next week. But I 
                         thought tonight, perhaps a reminder 
                         of my feeling for you...

               Rose slowly opens the box. Inside is the necklace... "HEART 
               OF THE OCEAN" in all its glory. It is huge... a malevolent 
               blue stone glittering with an infinity of scalpel-like inner 
               reflections.

                                     ROSE
                         My God... Cal. Is it a --

                                     CAL
                         Diamond. Yes it is. 56 carats.

               He takes the necklace and during the following places it 
               around her throat. He turns her to the mirror, staring behind 
               her.

                                     CAL
                         It was once worn by Louis the 
                         Sixteenth. They call it Le Coeur de 
                         la Mer, the --

                                     ROSE
                         The Heart of the Ocean. Cal, it's... 
                         it's overwhelming.

               He gazes at the image of the two of them in the mirror.

                                     CAL
                         It's for royalty. And we are royalty.

               His fingers caress her neck and throat. He seems himself to 
               be disarmed by Rose's elegance and beauty. His emotion is, 
               for the first time, unguarded.

                                     CAL
                         There's nothing I couldn't give you. 
                         There's nothing I'd deny you if you 
                         would deny me. Open your heart to 
                         me, Rose.

               CAMERA begins to TRACK IN ON ROSE. Closer and closer, during 
               the following:

                                     OLD ROSE (V.O.)
                         Of course his gift was only to reflect 
                         light back onto himself, to illuminate 
                         the greatness that was Caledon 
                         Hockley. It was a cold stone... a 
                         heart of ice.

               Finally, when Rose's eyes FILL FRAME, we MORPH SLOWLY to her 
               eyes as the are now... transforming through 84 years of 
               life...

               TRANSITION

               INT. KELDYSH IMAGING SHACK

               Without a cut the wrinkled, weathered landscape of age has 
               appeared around her eyes. But the eyes themselves are the 
               same.

                                     OLD ROSE
                         After all these years, feel it closing 
                         around my throat like a dog collar.

               THE CAMERA PUllS BACK to show her whole face.

                                     ROSE
                         I can still feel its weight. If you 
                         could have felt it, not just seen 
                         it...

                                     LOVETT
                         Well, that's the general idea, my 
                         dear.

                                     BODINE
                         So let me get this right. You were 
                         gonna kill yourself by jumping off 
                         the Titanic?
                              (he guffaws)
                         That's great!

                                     LOVETT
                              (warningly)
                         Lewis...

               But Rose laughs with Bodine.

                                     BODINE
                              (still laughing)
                         All you had to do was wait two days!

               Lovett, standing out of Rose's sightline, checks his watch. 
               Hours have passed. This process is taking too long.

                                     LOVETT
                         Rose, tell us more about the diamond. 
                         What did Hockley do with it after 
                         that?

                                     ROSE
                         I'm afraid I'm feeling a little tired, 
                         Mr. Lovett.

               Lizzy picks up the cue and starts to wheel her out.

                                     LOVETT
                         Wait! Can you give us something go 
                         on, here. Like who had access to the 
                         safe. What about this Lovejoy guy? 
                         The valet. Did he have the 
                         combination?

                                     LIZZY
                         That's enough.

               Lizzy takes her out. Rose's old hand reappears at the doorway 
               in a frail wave goodbye.

                                                                    CUT TO:

               EXT. LAUNCH AREA / KELDYSH DECK - DAY

               As the big hydraulic jib swings one of the Mir subs out over 
               the water. Lovett walks as he talks with Bobby Buell, the 
               partners' rep. They weave among deck cranes, launch crew, 
               sub maintenance guys.

                                     BUELL
                         The partners are pissed.

                                     BROCK
                         Bobby, buy me time. I need time.

                                     BUELL
                         We're running thirty thousand a day, 
                         and we're six days over. I'm telling 
                         you what they're telling me. The 
                         hand is on the plug. It's starting 
                         to pull.

                                     BROCK
                         Well you tell the hand I need another 
                         two days! Bobby, Bobby, Bobby... 
                         we're close! I smell it. I smell 
                         ice. She had the diamond on... now 
                         we just have to find out where it 
                         wound up. I just gotta work her a 
                         bit more. Okay?

               Brock turns and sees Lizzy standing behind him. She has 
               overheard the past part of his dialogue with Buell. He goes 
               to her and hustles her away from Buell, toward a quite spot 
               on the deck.

                                     BROCK
                         Hey, Lizzy. I need to talk to you 
                         for a second.

                                     LIZZY
                         Don't you mean work me?

                                     BROCK
                         Look, I'm running out of time. I 
                         need your help.

                                     LIZZY
                         I'm not going to help you browbeat 
                         my hundred and one year old 
                         grandmother. I came down here to 
                         tell you to back off.

                                     BROCK
                              (with undisguised 
                              desperation)
                         Lizzy... you gotta understand 
                         something. I've bet it all to find 
                         the Heart of the Ocean. I've got all 
                         my dough tied up in this thing. My 
                         wife even divorced me over this hunt. 
                         I need what's locked inside your 
                         grandma's memory.
                              (he holds out his 
                              hand)
                         You see this? Right here?

               She looks at his hand, palm up. Empty. Cupped, as if around 
               an imaginary shape.

                                     LIZZY
                         What?

                                     BROCK
                         That's the shape my hand's gonna be 
                         when I hold that thing. You 
                         understand? I'm not leaving here 
                         without it.

                                     LIZZY
                         Look, Brock, she's going to do this 
                         her way, in her own time. Don't 
                         forget, she contacted you. She's out 
                         here for her own reasons, God knows 
                         what they are.

                                     LOVETT
                         Maybe she wants to make peace with 
                         the past.

                                     LIZZY
                         What past? She has never once, not 
                         once, ever said a word about being 
                         on the Titanic until two days ago.

                                     LOVETT
                         Then we're all meeting your 
                         grandmother for the first time.

                                     LIZZY
                              (looks at him hard)
                         You think she was really there?

                                     LOVETT
                         Oh, yeah. Yeah, I'm a believer. She 
                         was there.

                                                                    CUT TO:

               INT. IMAGING SHACK

               Bodine starts the tape recorder. Rose is gazing at the screen 
               seeing THE LIVE FEED FROM THE WRECK -- SNOOP DOG is moving 
               along the starboard side of the hull, heading aft. The 
               rectangular windows of A deck (forward) march past on the 
               right.

                                     ROSE
                         The next day, Saturday, I remember 
                         thinking how the sunlight felt.

                                                               DISSOLVE TO:

               EXT. B DECK TITANIC - DAY

               MATCH DISSOLVE from the rusting hulk to the gleaming new 
               Titanic in 1912, passing the end of the enclosed promenade 
               just as Rose walks into the sunlight right in front of us. 
               She is stunningly dressed and walking with purpose.

                                     OLD ROSE (V.O.)
                         As if I hadn't felt the sun in years.

               IT IS SATURDAY APRIL 13, 1912. Rose unlatches the gate to go 
               down into third class. The steerage men on the deck stop 
               what they're doing and stare at her.

                                                                    CUT TO:

               INT. THIRD CLASS GENERAL ROOM

               The social center of steerage life. It is stark by comparison 
               to the opulence of first class, but is a loud, boisterous 
               place. There are mothers with babies, kids running between 
               the benches yelling in several languages and being scolded 
               in several more. There are old women yelling, men playing 
               chess, girls doing needlepoint and reading dime novels. There 
               is even an upright piano and Tommy Ryan is noodling around 
               it.

               Three boys, shrieking and shouting, are scrambling around 
               chasing a rat under the benches, trying to whomp it with a 
               shoe and causing general havoc. Jack is playing with 5 year 
               old CORA CARTMELL, drawing funny faces together in his 
               sketchbook.

               Fabrizio is struggling to get a conversation going with an 
               attractive Norwegian girl, HELGA DAHL, sitting with her family 
               at a table across the room.

                                     FABRIZIO
                         No Italian? Some little English?

                                     HELGA
                         No, no. Norwegian. Only.

               Helga's eye is caught by something. Fabrizio looks, does a 
               take... and Jack, curious, follows their gaze to see...

               Rose, coming toward them. The activity in the room stops... 
               a hush falls. Rose feels suddenly self-conscious as the 
               steerage passengers stare openly at this princess, some with 
               resentment, others with awe. She spots Jack and gives a little 
               smile, walking straight to him. He rises to meet her, smiling.

                                     ROSE
                         Hello Jack.

               Fabrizio and Tommy are floored. Its like the slipper fitting 
               Cinderella.

                                     JACK
                         Hello again.

                                     ROSE
                         Could I speak to you in private?

                                     JACK
                         Uh, yes. Of course. After you.

               He motions her ahead and follows. Jack glances over his 
               shoulder, one eyebrow raised, as he walks out with her leaving 
               a stunned silence.

                                                                    CUT TO:

               EXT. BOAT DECK - DAY

               Jack and Rose walk side by side. They pass people reading 
               and talking in steamer chairs, some of whom glance curiously 
               at the mismatched couple. He feels out of place in his rough 
               clothes. They are both awkward, for different reasons.

                                     JACK
                         So, you got a name by the way?

                                     ROSE
                         Rose. Rose DeWitt Bukater.

                                     JACK
                         That's quite a moniker. I may hafta 
                         get you to write that down.

               There is an awkward pause.

                                     ROSE
                         Mr. Dawson, I --

                                     JACK
                         Jack.

                                     ROSE
                         Jack... I feel like such an idiot. 
                         It took me all morning to get up the 
                         nerve to face you.

                                     JACK
                         Well, here you are.

                                     ROSE
                         Here I am. I... I want to thank you 
                         for what you did. Not just for... 
                         for pulling me back. But for your 
                         discretion.

                                     JACK
                         You're welcome. Rose.

                                     ROSE
                         Look, I know what you must be 
                         thinking! Poor little rich girl. 
                         What does she know about misery?

                                     JACK
                         That's not what I was thinking. What 
                         I was thinking was... what could 
                         have happened to hurt this girl so 
                         much she though she had no way out.

                                     ROSE
                         I don't... it wasn't just one thing. 
                         It was everything. It was them, it 
                         was their whole world. And I was 
                         trapped in it, like an insect in 
                         amber.
                              (in a rush)
                         I just had to get away... just run 
                         and run and run... and then I was at 
                         the back rail and there was no more 
                         ship... even the Titanic wasn't big 
                         enough. Not enough to get away from 
                         them. And before I'd really though 
                         about it, I was over the rail. I was 
                         so furious. I'll show them. They'll 
                         be sorry!

                                     JACK
                         Uh huh. They'll be sorry. 'Course 
                         you'll be dead.

                                     ROSE
                              (she lowers her head)
                         Oh God, I am such an utter fool.

                                     JACK
                         That penguin last night, is he one 
                         of them?

                                     ROSE
                         Penguin? Oh, Cal! He is them.

                                     JACK
                         Is he your boyfriend?

                                     ROSE
                         Worse I'm afraid.

               She shows him her engagement ring. A sizable diamond.

                                     JACK
                         Gawd look at that thing! You would 
                         have gone straight to the bottom.

               They laugh together. A passing steward scowls at Jack, who 
               is clearly not a first class passenger, but Rose just glares 
               at him away.

                                     JACK
                         So you feel like you're stuck on a 
                         train you can't get off 'cause you're 
                         marryin' this fella.

                                     ROSE
                         Yes, exactly!

                                     JACK
                         So don't marry him.

                                     ROSE
                         If only it were that simple.

                                     JACK
                         It is that simple.

                                     ROSE
                         Oh, Jack... please don't judge me 
                         until you've seen my world.

                                     JACK
                         Well, I guess I will tonight.

               Looking for another topic, any other topic, she indicates 
               his sketchbook.

                                     ROSE
                         What's this?

                                     JACK
                         Just some sketches.

                                     ROSE
                         May I?

               The question is rhetorical because she has already grabbed 
               the book. She sits on a deck chair and opens the sketchbook. 

               ON JACK'S sketches... each one an expressive little bit of 
               humanity: an old woman's hands, a sleeping man, a father and 
               daughter at the rail. The faces are luminous and alive. His 
               book is a celebration of the human condition.

                                     ROSE
                         Jack, these are quite good! Really, 
                         they are.

                                     JACK
                         Well, they didn't think too much of 
                         'em in Paree.

               Some loose sketches fall out and are taken by the wind. Jack 
               scrambles after them... catching two, but the rest are gone, 
               over the rail.

                                     ROSE
                         Oh no! Oh, I'm so sorry. Truly!

                                     JACK
                         Well, they didn't think too much of 
                         'em in Paree.

               He snaps his wrist, shaking his drawing hand in a flourish.

                                     JACK
                         I just seem to spew 'em out. Besides, 
                         they're not worth a damn anyway.

               For emphasis he throws away the two he caught. They sail 
               off.

                                     ROSE
                              (laughing)
                         You're deranged!

               She goes back to the book, turning a page.

                                     ROSE
                         Well, well...

               She has come upon a series of nudes. Rose is transfixed by 
               the languid beauty he has created. His nudes are soulful, 
               real, with expressive hands and eyes. They feel more like 
               portraits than studies of the human form... almost 
               uncomfortably intimate. Rose blushes, raising the book as 
               some strollers go by.

                                     ROSE
                              (trying to be very 
                              adult)
                         And these were drawn from life?

                                     JACK
                         Yup. That's one of the great things 
                         about Paris. Lots of girls willing 
                         take their clothes off.

               She studies one drawing in particular, the girl posed half 
               in sunlight, half in shadow. Her hands lie at her chin, one 
               furled and one open like a flower, languid and graceful. The 
               drawing is like an Alfred Steiglitz print of Georgia O'Keefe.

                                     ROSE
                         You liked this woman. You used her 
                         several times.

                                     JACK
                         She had beautiful hands.

                                     ROSE
                              (smiling)
                         I think you must have had a love 
                         affair with her...

                                     JACK
                              (laughing)
                         No, no! Just with her hands.

                                     ROSE
                              (looking up from the 
                              drawings)
                         You have a gift, Jack. You do. You 
                         see people.

                                     JACK
                         I see you.

               There it is. That piercing gaze again.

                                     ROSE
                         And...?

                                     JACK
                         You wouldn'ta jumped.

                                                                    CUT TO:

               INT. RECEPTION ROOM / D-DECK - DAY

               Ruth is having tea with NOEL LUCY MARTHA DYER-EDWARDS, the 
               COUNTESS OF ROTHES, a 35ish English blue-blood with patirician 
               features. Ruth sees someone coming across the room and lowers 
               her voice.

                                     RUTH
                         Oh no, that vulgar Brown woman is 
                         coming this way. Get up, quickly 
                         before she sits with us.

               Molly Brown walks up, greeting them cheerfully as they are 
               rising.

                                     MOLLY
                         Hello girls, I was hoping I'd catch 
                         you at tea.

                                     RUTH
                         We're awfully sorry you missed it. 
                         The Countess and I are just off to 
                         take the air on the boat deck.

                                     MOLLY
                         That sounds great. Let's go. I need 
                         to catch up on the gossip.

               Ruth grits her teeth as the three of them head for the Grand 
               Staircase to go up. TRACKING WITH THEM, as they cross the 
               room, the SHOT HANDS OFF to Bruce Ismay and Captain Smith at 
               another table.

                                     ISMAY
                         So you've not lit the last four 
                         boilers then?

                                     SMITH
                         No, but we're making excellent time.

                                     ISMAY
                              (impatiently)
                         Captain, the press knows the size of 
                         Titanic, let them marvel at her speed 
                         too. We must give them something new 
                         to print. And the maiden voyage of 
                         Titanic must make headlines!

                                     SMITH
                         I prefer not to push the engines 
                         until they've been properly run in.

                                     ISMAY
                         Of course I leave it to your good 
                         offices to decide what's best, but 
                         what a glorious end to your last 
                         crossing if we get into New York 
                         Tuesday night and surprise them all.
                              (Ismay slaps his hand 
                              on the table)
                         Retire with a bang, eh, E.J.?

               A beat. Then Smith nods, stiffy.

                                                                    CUT TO:

               EXT. A DECK PROMENADE - DAY

               Rose and Jack stroll aft, past people lounging on deck chairs 
               in the slanting late-afternoon light. Stewards scurry to 
               serve tea or hot cocoa.

                                     ROSE
                              (girlish and excited)
                         You know, my dream has always been 
                         to just chuck it all and become an 
                         artist... living in a garret, poor 
                         but free!

                                     JACK
                              (laughing)
                         You wouldn't last two days. There's 
                         no hot water, and hardly ever any 
                         caviar.

                                     ROSE
                              (angry in a flash)
                         Listen, buster... I hate caviar! And 
                         I'm tired of people dismissing my 
                         dreams with a chuckle and a pat on 
                         the head.

                                     JACK
                         I'm sorry. Really... I am.

                                     ROSE
                         Well, alright. There's something in 
                         me, Jack. I feel it. I don't know 
                         what it is, whether I should be an 
                         artist, or, I don't know... a dancer. 
                         Like Isadora Duncan.... a wild pagan 
                         spirit...

               She leaps forward, lands deftly and whirls like a dervish. 
               Then she sees something ahead and her face lights up.

                                     ROSE
                         ...or a moving picture actress!

               She takes his hand and runs, pulling him along the deck toward --

               DANIEL AND MARY MARVIN. Daniel is cranking the big wooden 
               movie camera as she poses stiffly at the rail.

                                     MARVIN
                         You're sad. Sad, sad, sad. You've 
                         left your lover on the shore. You 
                         may never see him agian. Try to be 
                         sadder, darling.

               SUDDENLY Rose shoots into the shot and strikes a theatrical 
               pose at the rail next to Mary. Mary bursts out laughing. 
               Rose pulls Jack into the picture and makes him pose.

               Marvin grins and starts yelling and gesturing. We see this 
               in CUTS, with music and no dialogue.

               SERIES OF CUTS:

               Rose posing tragically at the rail, the back of her hand to 
               her forehead.

               Jack on a deck chair, pretending to be a Pasha, the two girls 
               pantomiming fanning him like slave girls.

               Jack, on his knees, pleading with his hands clasped while 
               Rose, standing, turns her head in bored disdain.

               Rose cranking the camera, while Daniel and Jack have a western 
               shoot-out. Jack wins and leers into the lens, twirling an 
               air mustache like Snidely Whiplash.

                                                                    CUT TO:

               EXT. A DECK PROMENADE / AFT - SUNSET

               Painted with orange light, Jack and Rose lean on the A-deck 
               rail aft, shoulder to shoulder. The ship's lights come on.

               It is a magical moment... perfect.

                                     ROSE
                         So then what, Mr. Wandering Jack?

                                     JACK
                         Well, then logging got to be too 
                         much like work, so I went down to 
                         Los Angeles to the pier in Santa 
                         Monica. That's a swell place, they 
                         even have a rollercoaster. I sketched 
                         portraits there for ten cents a piece.

                                     ROSE
                         A whole ten cents?!

                                     JACK
                              (not getting it)
                         Yeah; it was great money... I could 
                         make a dollar a day, sometimes. But 
                         only in summer. When it got cold, I 
                         decided to go to Paris and see what 
                         the real artists were doing.

                                     ROSE
                              (looks at the dusk 
                              sky)
                         Why can't I be like you Jack? Just 
                         head out for the horizon whenever I 
                         feel like it.
                              (turning to him)
                         Say we'll go there, sometime... to 
                         that pier... even if we only ever 
                         just talk about it.

                                     JACK
                         Alright, we're going. We'll drink 
                         cheap beer and go on the rollercoaster 
                         until we throw up and we'll ride 
                         horses on the beach... right in the 
                         surf... but you have to ride like a 
                         cowboy, none of that side-saddle 
                         stuff.

                                     ROSE
                         You mean one leg on each side? 
                         Scandalous! Can you show me?

                                     JACK
                         Sure. If you like.

                                     ROSE
                              (smiling at him)
                         I think I would.
                              (she looks at the 
                              horizon)
                         And teach me to spit too. Like a 
                         man. Why should only men be able to 
                         spit. It's unfair.

                                     JACK
                         They didn't teach you that in 
                         finishing school? Here, it's easy. 
                         Watch closely.

               He spits. It arcs out over the water.

                                     JACK
                         Your turn.

               Rose screws up her mouth and spits. A pathetic little bit of 
               foamy spittle which mostly runs down her chin before falling 
               off into the water.

                                     JACK
                         Nope, that was pitiful. Here, like 
                         this... you hawk it down... 
                         HHHNNNK!... then roll it on your 
                         tongue, up to the front, like thith, 
                         then a big breath and PLOOOW!! You 
                         see the range on that thing?

               She goes through the steps. Hawks it down, etc. He coaches 
               her through it (ad lib) while doing the steps himself. She 
               lets fly. So does he. Two comets of gob fly out over the 
               water.

                                     JACK
                         That was great!

               Rose turns to him, her face alight. Suddenly she blanches. 
               He sees her expression and turns.

               Ruth, the Countess of Rothes, and Molly Brown have been 
               watching them hawking lugees. Rose becomes instantly composed.

                                     ROSE
                         Mother, may I introduce Jack Dawson.

                                     RUTH
                         Charmed, I'm sure.

               Jack has a little spit running down his chin. He doesn't 
               know it. Molly Brown is grinning. As Rose proceeds with the 
               introductions, we hear...

                                     OLD ROSE (V.O.)
                         The others were gracious and curious 
                         about the man who'd saved my life. 
                         But my mother looked at him like an 
                         insect. A dangerous insect which 
                         must be squashed quickly.

                                     MOLLY
                         Well, Jack, it sounds like you're a 
                         good man to have around in a sticky 
                         spot --

               They all jump as a BUGLER sounds the meal call right behind 
               them.

                                     MOLLY
                         Why do they insist on always 
                         announcing dinner like a damn cavalry 
                         charge?

                                     ROSE
                         Shall we go dress, mother?
                              (over her shoulder)
                         See you at dinner, Jack.

                                     RUTH
                              (as they walk away)
                         Rose, look at you... out in the sun 
                         with no hat. Honestly!

               The Countess exits with Ruth and Rose, leaving Jack and Molly 
               alone on deck.

                                     MOLLY
                         Son, do you have the slightest 
                         comprehension of what you're doing?

                                     JACK
                         Not really.

                                     MOLLY
                         Well, you're about to go into the 
                         snakepit. I hope you're ready. What 
                         are you planning to wear?

               Jack looks down at his clothes. Back up at her. He hadn't 
               thought about that.

                                     MOLLY
                         I figured.

                                                                    CUT TO:

               INT. MOLLY BROWN'S STATEROOM

               Men's suits and jackets and formal wear are strewn all over 
               the place. Molly is having a fine time. Jack is dressed, 
               except for his jacket, and Molly is tying his bow tie.

                                     MOLLY
                         Don't feel bad about it. My husband 
                         still can't tie one of these damn 
                         things after 20 years. There you go.

               She picks up a jacket off the bed and hands it to him. Jack 
               goes into the bathroom to put it on. Molly starts picking up 
               the stuff off the bed.

                                     MOLLY
                         I gotta buy everything in three sizes 
                         'cause I never know how much he's 
                         been eating while I'm away.

               She turns and sees him, though we don't.

                                     MOLLY
                         My, my, my... you shine up like a 
                         new penny.

                                                                    CUT TO:

               EXT. BOAT DECK / FIRST CLASS ENTRANCE - DUSK

               A purple sky, shot with orange, in the west. Drifting strains 
               of classic music. We TRACK WITH JACK along the deck. By 
               Edwardian standards he looks badass. Dashing in his borrowed 
               white-tie outfit, right down to his pearl studs.

               A steward bows and smartly opens the door to the First Class 
               Entrance.

                                     STEWARD
                         Good evening, sir.

               Jack plays the role smoothly. Nods with just the right degree 
               of disdain.

                                                                    CUT TO:

               INT. UPPER LANDING / GRAND STAIRCASE AND A-DECK

               Jack steps in and his breath is taken away by the splendor 
               spread out before him. Overhead is the enormous glass dome, 
               with a crystal chandelier at its center. Sweeping down six 
               stories is the First Class Grand Staircase, the epitome of 
               the opulent naval architecture of the time.

               And the people: the women in their floor length dresses, 
               elaborate hairstyles and abundant jewelry... the gentlemen 
               in evening dress, standing with one hand at the small of the 
               back, talking quietly.

               Jack descends to A deck. Several men nod a perfunctory 
               greeting. He nods back, keeping it simple. He feels like a 
               spy.

               Cal comes down the stairs, with Ruth on his arm, covered in 
               jewelry. They both walk right past Jack, neither one 
               recognizing him. Cal nods at him, one gent to another. But 
               Jack barely has time to be amused. Because just behind Cal 
               and Ruth on the stairs is Rose, a vision in red and black, 
               her low-cut dress showing off her neck and shoulders, her 
               arms sheathed in white gloves that come well above above the 
               elbow. Jack is hypnotized by her beauty.

               CLOSE ON ROSE

               As she approaches Jack. He imitates the gentlemen's stance, 
               hand behind his back. She extends her gloved hand and he 
               takes it, kissing the back of her fingers. Rose flushes, 
               beaming noticeably. She can't take her eyes off him.

                                     JACK
                         I saw that in a nickelodeon once, 
                         and I always wanted to do it.

                                     ROSE
                         Cal, surely you remember Mr. Dawson.

                                     CAL
                              (caught off guard)
                         Dawson! I didn't recognize you.
                              (studies him)
                         Amazing! You could almost pass for a 
                         gentlemen.

                                                                    CUT TO:

               INT. D-DECK RECEPTION ROOM

               CUT TO THE RECEPTION ROOM ON D-DECK, as the party descends 
               to dinner. They encounter Molly Brown, looking good in a 
               beaded dress, in her own busty broad-shouldered way. Molly 
               grins when she sees Jack. As they are going into the dining 
               saloon she walks next to him, speaking low:

                                     MOLLY
                         Ain't nothin' to it, is there, Jack?

                                     JACK
                         Yeah, you just dress like a pallbearer 
                         and keep your nose up.

                                     MOLLY
                         Remember, the only thing they respect 
                         is money, so just act like you've 
                         got a lot of it and you're in the 
                         club.

               As they enter the swirling throng, Rose leans close to him, 
               pointing out several notables.

                                     ROSE
                         There's the Countess Rothes. And 
                         that's John Jacob Astor... the richest 
                         man on the ship. His little wifey 
                         there, Madeleine, is my age and in a 
                         delicate condition. See how she's 
                         trying to hide it. Quite the scandal.
                              (nodding toward a 
                              couple)
                         And over there, that's Sir Cosmo and 
                         Lucile, Lady Duff-Gordon. She designs 
                         naughty lingerie, among her many 
                         talents. Very popular with the royals.

               Cal becomes engrossed in a conversations with Cosmo Duff-
               Gordon and Colonel Gracie, while Ruth, the Countess and 
               Lucille discuss fashion. Rose picots Jack smoothly, to show 
               him another couple, dressed impeccably.

                                     ROSE
                         And that's Benjamin Guggenheim and 
                         his mistress, Madame Aubert. Mrs. 
                         Guggenheim is at home with the 
                         children, of course.

               Cal, meanwhile, is accepting the praise of his male 
               counterparts, who are looking at Rose like a prize show horse.

                                     SIR COSMO
                         Hockley, she is splendid.

                                     CAL
                         Thank you.

                                     GRACIE
                         Cal's a lucky man. I know him well, 
                         and it can only be luck.

               Ruth steps over, hearing the last. She takes Cal's arm, 
               somewhat coquettishly.

                                     RUTH
                         How can you say that Colonel? Caledon 
                         Hockley is a great catch.

               The entourage strolls toward the dining saloon, where they 
               run into the Astor's going through the ornate double doors.

                                     ROSE
                         J.J., Madeleine, I'd like you to 
                         meet Jack Dawson.

                                     ASTOR
                              (shaking his hand)
                         Good to meet you Jack. Are you of 
                         the Boston Dawsons?

                                     JACK
                         No, the Chippewa Falls Dawsons, 
                         actually.

               J.J. nods as if he's heard of them, then looks puzzled. 
               Madeleine Astor appraises Jack and whispers girlishly to 
               Rose:

                                     MADELEINE
                         It's a pity we're both spoken for, 
                         isn't it?

                                                                    CUT TO:

               INT. DINING SALOON

               Like a ballroom at the palace, alive and lit by a 
               constellation of chandeliers, full of elegantly dressed people 
               and beautiful music from BANDLEADER WALLACE HARTLEY'S small 
               orchestra. As Rose and Jack enter and move across the room 
               to their table, Cal and Ruth beside them, we hear...

                                     OLD ROSE (V.O.)
                         He must have been nervous but he 
                         never faltered. They assumed he was 
                         one of them... a young captain of 
                         industry perhaps... new money, 
                         obviously, but still a member of the 
                         club. Mother of course, could always 
                         be counted upon...

                                                                    CUT TO:

               INT. DINING SALOON - CLOSE ON RUTH

                                     RUTH
                         Tell us of the accommodations in 
                         steerage, Mr. Dawson. I hear they're 
                         quite good on this ship.

               WIDER: THE TABLE

               Jack is seated opposite Rose, who is flanked by Cal and Thomas 
               Andrews. Also at the table are Molly Brown, Ismay, Colonel 
               Gracie, the Countess, Guggenheim, Madame Aubert, and the 
               Astors.

                                     JACK
                         The best I've seen, m'am. Hardly any 
                         rats.

               Rose motions surreptitiously for Jack to take his napkin off 
               his plate.

                                     CAL
                         Mr. Dawson is joining us from third 
                         class. He was of some assistance to 
                         my fiancee last night.
                              (to Jack, as if to a 
                              child)
                         This is foie gras. It's goose liver.

               We see whispers exchanged. Jack becomes the subject of furtive 
               glances. Now they're all feeling terribly liberal and 
               dangerous.

                                     GUGGENHEIM
                              (low to Madame Aubert)
                         What is Hockley hoping to prove, 
                         bringing this... bohemian... up here?

                                     WAITER
                              (to Jack)
                         How do you take your caviar, sir?

                                     CAL
                              (answering for him)
                         Just a soupcon of lemon...
                              (to Jack, smiling)
                         ...it improves the flavor with 
                         champagne.

                                     JACK
                              (to the waiter)
                         No caviar for me, thanks.
                              (to Cal)
                         Never did like it much.

               He looks at Rose, pokerfaced, and she smiles.

                                     RUTH
                         And where exactly do you live, Mr. 
                         Dawson?

                                     JACK
                         Well, right now my address is the 
                         RMS Titanic. After that, I'm on God's 
                         good humor.

               Salad is served. Jack reaches for the fish fork. Rose gives 
               him a look and picks up the salad fork, prompting him with 
               her eyes. He changes forks.

                                     RUTH
                         You find that sort of rootless 
                         existence appealing, do you?

                                     JACK
                         Well... it's a big world, and I want 
                         to see it all before I go. My father 
                         was always talkin' about goin' to 
                         see the ocean. He died in the town 
                         he was born in, and never did see 
                         it. You can't wait around, because 
                         you never know what hand you're going 
                         to get dealt next. See, my folks 
                         died in a fire when I was fifteen, 
                         and I've been on the road since. 
                         Somethin' like that teaches you to 
                         take life as it comes at you. To 
                         make each day count.

               Molly Brown raises her glass in a salute.

                                     MOLLY
                         Well said, Jack.

                                     COLONEL GRACIE
                              (raising his glass)
                         Here, here.

               Rose raises her glass, looking at Jack.

                                     ROSE
                         To making it count.

               Ruth, annoyed that Jack has scored a point, presses him 
               further.

                                     RUTH
                         How is it you have the means to 
                         travel, Mr. Dawson?

                                     JACK
                         I work my way from place to place. 
                         Tramp steamers and such. I won my 
                         ticket on Titanic here in a lucky 
                         hand at poker.
                              (he glances at Rose)
                         A very lucky hand.

                                     GRACIE
                         All life is a game of luck.

                                     CAL
                         A real man makes his own luck, Archie.

               Rose notices that Thomas Andrews, sitting next to her, is 
               writing in his notebook, completely ignoring the conversation.

                                     ROSE
                         Mr. Andrews, what are you doing? I 
                         see you everywhere writing in this 
                         little book.
                              (grabs it and reads)
                         Increase number of screws in hat 
                         hooks from 2 to 3. You build the 
                         biggest ship in the world and this 
                         preoccupies you?!

               Andrews smiles sheepishly.

                                     ISMAY
                         He knows every rivet in her, don't 
                         you Thomas?

                                     ANDREWS
                         All three million of them.

                                     ISMAY
                         His blood and soul are in the ship. 
                         She may be mine on paper, but in the 
                         eyes of God she belongs to Thomas 
                         Andrews.

                                     ROSE
                         Your ship is a wonder, Mr. Andrews. 
                         Truly.

                                     ANDREWS
                         Thank you, Rose.

               We see that Andrews has come under Rose's spell.

               TIME TRANSITION

               Dessert has been served and a waiter arrives with cigars in 
               a humidor on a wheeled cart. The men start clipping ends and 
               lighting.

                                     ROSE
                              (low, to Jack)
                         Nest it'll be brandies in the Smoking 
                         Room.

                                     GRACIE
                              (rising)
                         Well, join me for a brandy, gentlemen?

                                     ROSE
                              (low)
                         Now they retreat into a cloud of 
                         smoke and congratulate each other on 
                         being masters of the universe.

                                     GRACIE
                         Joining us, Dawson? You don't want 
                         to stay out here with the women, do 
                         you?

               Actually he does, but...

                                     JACK
                         No thanks. I'm heading back.

                                     CAL
                         Probably best. It'll be all business 
                         and politics, that sort of thing. 
                         Wouldn't interest you. Good of you 
                         to come.

               Cal and the other gentlemen exit.

                                     ROSE
                         Jack, must you go?

                                     JACK
                         Time for my coach to turn back into 
                         a pumpkin.

               He leans over to take her hand.

               INSERT:

               We see him slip a tiny folded not into her palm.

               Ruth, scowling, watches him walk away across the enormous 
               room. Rose surreptitiously opens the note below table level. 
               It reads: "Make it count. Meet me at the clock".

                                                                    CUT TO:

               INT. A-DECK FOYER - NIGHT

               Rose crosses the A-Deck foyer, sighting Jack at the landing 
               above. Overhead is the crystal dome. Jack has his back to 
               her, studying the ornate clock with its carved figures of 
               Honor and Glory. It softly strikes the hour.

               MOVING WITH ROSE as she goes up the sweeping staircase toward 
               him. He turns, sees her... smiles.

                                     JACK
                         Want to go to a real party?

                                                                    CUT TO:

               INT. THIRD CLASS GENERAL ROOM

               Crowded and alive with music, laughter and raucous carrying 
               on. An ad hoc band is gathered near the upright piano, honking 
               out lively stomping music on fiddle, accordion and tambourine. 
               People of all ages are dancing, drinking beer and wine, 
               smoking, laughing, even brawling.

               Tommy hands Rose a pint of stout and she hoists it. Jack 
               meanwhile dances with 5 year old Cora Cartmell, or tries to, 
               with her standing on his feet. As the tune ends, Rose leans 
               down to the little girl.

                                     ROSE
                         May I cut in, miss?

                                     JACK
                         You're still my best girl, Cora.

               Cora scampers off. Rose and Jack face each other. She is 
               trembling as he takes her right hand in his left. His other 
               hand slides to the small of her back. It is an electrifying 
               moment.

                                     ROSE
                         I don't know the steps.

                                     JACK
                         Just move with me. Don't think.

               The music starts and they are off. A little awkward at first, 
               she starts to get into it. She grins at Jack as she starts 
               to get the rhythm of the steps.

                                     ROSE
                         Wait... stop!

               She bends down, pulling off her high heeled shoes, and flings 
               them to Tommy. Then she grabs Jack and they plunge back into 
               the fray, dancing faster as the music speeds up.

                                                                    CUT TO:

               INT. THIRD CLASS GENERAL ROOM

               The scene is rowdy and rollicking. A table gets knocked over 
               as a drunk crashes into it. And in the middle of it... Rose 
               dancing with Jack in her stocking feet. The steps are fast 
               and she shines with sweat. A space opens around them, and 
               people watch them, clapping as the band plays faster and 
               faster.

               FABRIZIO AND HELGA

               Dancing has obviated the need for a common language. He whirls 
               her, then she responds by whirling him... Fabrizio's eyes go 
               wide when he realizes she's stronger than he is.

               The tune ends in a mad rush. Jack steps away from Rose with 
               a flourish, allowing her to take a bow. Exhilarated and 
               slightly tipsy, she does a graceful ballet ployer, feet turned 
               out perfectly. Everyone laughs and applauds. Rose is a hit 
               with the steerage folks, who've never had a lady party with 
               them.

               They move to a table, flushed and sweaty. Rose grabs 
               Fabrizio's cigarette and takes a big drag. She's feeling 
               cocky. Fabrizio is grinning, holding hands with Helga.

                                     JACK
                         How you two doin'?

                                     FABRIZIO
                         I don't know what she's say, she 
                         don't know what I say, so we get 
                         along fine.

               Tommy walks up with a pint for each of them. Rose chugs hers, 
               showing off.

                                     ROSE
                         You think a first class girl can't 
                         drink?

               Everybody else is dancing again, and Bjorn Gundersen crashes 
               into Tommy, who sloshes his beer over Rose's dress. She 
               laughs, not caring. But Tommy lunges, grabbing Bjorn and 
               wheeling him around.

                                     TOMMY
                         You stupid bastard!!

               Bjorn comes around, his fists coming up... and Jack leaps 
               into the middle of it, pushing them apart.

                                     JACK
                         Boys, boys! Did I ever tell you the 
                         one about the Swede and the Irishman 
                         goin' to the whorehouse?

               Tommy stands there, all piss and vinegar, chest puffed up. 
               Then he grins and claps Bjorn on the shoulder.

                                     ROSE
                         So, you think you're big tough men? 
                         Let's see you do this.

               In her stocking feet she assumes a ballet stance, arms raised, 
               and goes up on point, taking her entire weight on the tips 
               of her toes. The guys gape at her incredible muscle control. 
               She comes back down, then her face screws up in pain. She 
               grabs one foot, hopping around.

                                     ROSE
                         Oooowww! I haven't done that in years.

               Jack catches her as she loses her balance, and everyone cracks 
               up.

               The DOOR to the well deck is open a few inches as Lovejoy 
               watches through the gap. He sees Jack holding Rose, both of 
               them laughing.

               Lovejoy closes the door.

                                                                    CUT TO:

               EXT. BOAT DECK - NIGHT

               The stars blaze overhead, so bright and clear you can see 
               the Milky Way. Rose and Jack walk along the row of lifeboats. 
               Still giddy from the party, they are singing a popular song 
               "Come Josephine in My Flying Machine".

                                     JACK / ROSE
                         Come Josephine in my flying machine 
                         And it's up she goes! Up she goes! 
                         In the air she goes. Where? There 
                         she goes!

               They fumble the words and break down laughing. They have 
               reached the First Class Entrance, but don't go straight in, 
               not wanting the evening to end. Through the doors the sound 
               of the ship's orchestra wafts gently. Rose grabs a davit and 
               leans back, staring at the cosmos.

                                     ROSE
                         Isn't it magnificent? So grand and 
                         endless.

               She goes to the rail and leans on it.

                                     ROSE
                         They're such small people, Jack... 
                         my crowd. They think they're giants 
                         on the earth, but they're not even 
                         dust in God's eye. They live inside 
                         this little tiny champagne bubble... 
                         and someday the bubble's going to 
                         burst.

               He leans at the rail next to her, his hand just touching 
               hers. It is the slightest contact imaginable, and all either 
               one of them can feel is that square inch of skin where their 
               hands are touching.

                                     JACK
                         You're not one of them. There's been 
                         a mistake.

                                     ROSE
                         A mistake?

                                     JACK
                         Uh huh. You got mailed to the wrong 
                         address.

                                     ROSE
                              (laughing)
                         I did, didn't I?
                              (pointing suddenly)
                         Look! A shooting star.

                                     JACK
                         That was a long one. My father used 
                         to say that whenever you saw one, it 
                         was a soul going to heaven.

                                     ROSE
                         I like that. Aren't we supposed to 
                         wish on it?

               Jack looks at her, and finds that they are suddenly very 
               close together. It would be so easy to move another couple 
               of inches, to kiss her. Rose seems to be thinking the same 
               thing.

                                     JACK
                         What would you wish for?

               After a beat, Rose pulls back.

                                     ROSE
                         Something I can't have.
                              (she smiles sadly)
                         Goodnight, Jack. And thank you.

               She leaves the rail and hurries through the First Class 
               Entrance.

                                     JACK
                         Rose!!

               But the door bangs shut, and she is gone. Back to her world.

                                                                    CUT TO:

               INT. ROSE AND CAL'S SUITE / PRIVATE PROMENADE - DAY

               SUNDAY APRIL 14, 1912. A bright clear day. Sunlight splashing 
               across the promenade. Rose and Cal are having breakfast in 
               silence. The tension is palpable. Trudy Bolt, in her maid's 
               uniform, pours the coffee and goes inside.

                                     CAL
                         I had hoped you would come to me 
                         last night.

                                     ROSE
                         I was tired.

                                     CAL
                         Yes. Your exertions below decks were 
                         no doubt exausting.

                                     ROSE
                              (stiffening)
                         I see you had that undertaker of a 
                         manservant follow me.

                                     CAL
                         You will never behave like that again! 
                         Do you understand?

                                     ROSE
                         I'm not some foreman in your mills 
                         than you can command! I am your 
                         fiancee --

               Cal explodes, sweeping the breakfast china off the table 
               with a crash. He moves to her in one shocking moment, 
               glowering over her and gripping the sides of her chair, so 
               she is trapped between his arms.

                                     CAL
                         Yes! You are! And my wife... in 
                         practice, if not yet by law. So you 
                         will honor me, as a wife is required 
                         to honor her husband! I will not be 
                         made out a fool! Is this in any way 
                         unclear?

               Rose shrinks into the chair. She sees Trudy, frozen, part 
               way through the door bringing the orange juice. Cal follows 
               Rose's glance and straightens up. He stalks past the maid, 
               entering the stateroom.

                                     ROSE
                         We... had a little accident. I'm 
                         sorry, Trudy.

                                                                    CUT TO:

               INT. RUTH'S SUITE - DAY

               Rose is dressed for the day, and is in the middle of helping 
               Ruth with her corset. The tight bindings do not inhibit Ruth's 
               fury at all.

                                     RUTH
                         You are not to see that boy again, 
                         do you understand me Rose? I forbid 
                         it!

               Rose has her knee at the base of her mother's back and is 
               pulling the corset strings with both hands.

                                     ROSE
                         Oh, stop it, Mother. You'll give 
                         yourself a nosebleed.

               Ruth pulls away from her, and crosses to the door, locking 
               it. CLACK!

                                     RUTH
                              (wheeling on her)
                         Rose, this is not a game! Our 
                         situation is precarious. You know 
                         the money's gone!

                                     ROSE
                         Of course I know it's gone. You remind 
                         me every day!

                                     RUTH
                         Your father left us nothing but a 
                         legacy of bad debts hidden by a good 
                         name. And that name is the only card 
                         we have to play.

               Rose turns her around and grabs the corset strings again. 
               Ruth sucks in her waist and Rose pulls.

                                     RUTH
                         I don't understand you. It is a fine 
                         match with Hockley, and it will insure 
                         our survival.

                                     ROSE
                              (hurt and lost)
                         How can you put this on my shoulders?

               Rose turns to her, and we see what Rose sees -- the naked 
               fear in her mother's eyes.

                                     RUTH
                         Do you want to se me working as a 
                         seamstress? Is that what you want? 
                         Do you want to see our fine things 
                         sold at an auction, our memories 
                         scattered to the winds? My God, Rose, 
                         how can you be so selfish?

                                     ROSE
                         It's so unfair.

                                     RUTH
                         Of course it's unfair! We're women. 
                         Our choices are never easy.

               Rose pulls the corset tighter.

                                                                    CUT TO:

               INT. FIRST CLASS DINING SALOON

               At the divine service, Captain Smith is leading a group in 
               the hymn "Almighty Father Strong To Save." Rose and Ruth 
               sing in the middle of the group.

               Lovejoy stands well back, keeping an eye on Rose. He notices 
               a commotion at the entry doors. Jack has been halted there 
               by two stewards. He is dressed in his third class clothes, 
               and stands there, hat in hand, looking out of place.

                                     STEWARD
                         Look, you, you're not supposed to be 
                         in here.

                                     JACK
                         I was just here last night... don't 
                         you remember?
                              (seeing Lovejoy coming 
                              toward him)
                         He'll tell you.

                                     LOVEJOY
                         Mr. Hockley and Mrs. DeWitt Bukater 
                         continue to be most appreciative of 
                         your assistance. They asked me to 
                         give you this in gratitude --

               He holds out two twenty dollar bills, which Jack refuses to 
               take.

                                     JACK
                         I don't want money, I --

                                     LOVEJOY
                         ...and also to remind you that you 
                         hold a third class ticket and your 
                         presence here is no longer 
                         appropriate.

               Jack spots Rose but she doesn't see him.

                                     JACK
                         I just need to talk to Rose for a --

                                     LOVEJOY
                         Gentlemen, please see that Mr. Dawson 
                         gets back where he belongs.
                              (giving the twenties 
                              to the stewards)
                         And that he stays there.

                                     STEWARD
                         Yes sir!
                              (to Jack)
                         Come along you.

               END ON ROSE

               Not seeing Jack hustled out.

                                     ROSE
                              (singing)
                         O hear us when we cry to thee for 
                         those in peril on the sea.

                                                                    CUT TO:

               INT. GYMNASIUM - DAY

               An Edwardian nautilus room. There are machines we recognize, 
               and some don't. A woman pedals a stationary bicycle in a 
               long dress, looking ridiculous. Thomas Andrews is leading a 
               small tour group, including Rose, Ruth and Cal. Cal is working 
               the oars of a stationary rowing machine with a well trained 
               stroke.

                                     CAL
                         Reminds me of my Harvard days.

               T.W. McCAULEY, the gym instructor, is a bouncy little man in 
               white flannels, eager to show off his modern equipment, like 
               his present-day counterpart on an "Abflex" infomercial. He 
               hits a switch and a machine with a saddle on it starts to 
               undulate. Rose puts her hand on it, curious.

                                     MCCAULEY
                         The electric horse is very popular. 
                         We even have an electric camel.
                              (to Ruth)
                         Care to try your hand at the rowing, 
                         m'am?

                                     RUTH
                         Don't be absurd. I can't think of a 
                         skill I should likely need less.

                                     ANDREWS
                         The next stop on our tour will be 
                         bridge. This way, please.

                                                                    CUT TO:

               EXT. AFT WELL DECK, B-DECK AND A-DECK - DAY

               Jack, walking with determination, is followed closely by 
               Tommy and Fabrizio. He quickly climbs the steps to B-Deck 
               and steps over the gate separating 3rd from 2nd class.

                                     TOMMY
                         She's a goddess amongst mortal men, 
                         there's no denyin'. But she's in 
                         another world, Jackie, forget her. 
                         She's closed the door.

               Jack moves furtively to the wall below the A-Deck promenade, 
               aft.

                                     JACK
                         It was them, not her.
                              (glancing around the 
                              deck)
                         Ready... go.

               Tommy shakes his head resignedly and puts his hands together, 
               crouching down. Jack steps into Tommy's hands and gets boosted 
               up to the next deck, where he scrambles nimbly over the 
               railing, onto the First Class deck.

                                     TOMMY
                         He's not bein' logical, I tell ya.

                                     FABRIZIO
                         Amore is'a not logical.

                                                                    CUT TO:

               EXT. A-DECK / AFT - DAY

               A man is playing with his son, who is spinning a top with a 
               string. The man's overcoat and hat are sitting on a deck 
               chair nearby. Jack emerges from behind one of the huge deck 
               cranes and calmly picks up the coat and bowler hat. He walks 
               away, slipping into the coat, and slicks his hair back with 
               spit. Then puts the hat on at a jaunty angle. At a distance 
               he could pass for a gentlemen.

                                                                    CUT TO:

               INT. BRIDGE / CHARTROOM - DAY

               HAROLD BRIDE, the 21 year old Junior Wireless Operator, 
               hustles in and skirts around Andrews' tour group to hand a 
               Marconigram to Captain Smith.

                                     BRIDE
                         Another ice warning, sir. This one 
                         from the "Baltic".

                                     SMITH
                         Thank you, Sparks.

               Smith glances at the message then nonchalantly puts it in 
               his pocket. He nods reassuringly to Rose and the group.

                                     SMITH
                         Not to worry, it's quite normal for 
                         this time of year. In fact, we're 
                         speeding up. I've just ordered the 
                         last boilers lit.

               Andrews scowls slightly before motioning the group toward 
               the door. They exit just as SECOND OFFICER CHARLES HERBERT 
               LIGHTOLLER comes out of the chartroom, stopping next to First 
               Officer Murdoch.

                                     LIGHTOLLER
                         Did we ever find those binoculars 
                         for the lookouts?

                                     FIRST OFFICER MURDOCH
                         Haven't seen them since Southampton.

                                                                    CUT TO:

               EXT. BOAT DECK / STARBOARD SIDE - DAY

               Andrews leads the group back from the bridge along the boat 
               deck.

                                     ROSE
                         Mr. Andrews, I did the sum in my 
                         head, and with the number of lifeboats 
                         times the capacity you mentioned... 
                         forgive me, but it seems that there 
                         are not enough for everyone aboard.

                                     ANDREWS
                         About half, actually. Rose, you miss 
                         nothing, do you? In fact, I put in 
                         these new type davits, which can 
                         take an extra row of boats here.
                              (he gestures along 
                              the deck)
                         But it was thought... by some... 
                         that the deck would look too 
                         cluttered. So I was over-ruled.

                                     CAL
                              (slapping the side of 
                              a boat)
                         Waste of deck space as it is, on an 
                         unsinkable ship!

                                     ANDREWS
                         Sleep soundly, young Rose. I have 
                         built you a good ship, strong and 
                         true. She's all the lifeboat you 
                         need.

               As they are passing Boat 7, a gentlemen turns from the rail 
               and walks up behind the group. It is Jack. He taps Rose on 
               the arm and she turns, gasping. He motions and she cuts away 
               from the group toward a door which Jack holds open. They 
               duck into the --

                                                                    CUT TO:

               INT. GYMNASIUM - DAY

               Jack closes the door behind her, and glances out through the 
               ripple-glass window to the starboard rail, where the gym 
               instructor is chatting up the woman who was riding the bike. 
               Rose and Jack are alone in the room.

                                     ROSE
                         Jack, this is impossible. I can't 
                         see you.

               He takes her by the shoulders.

                                     JACK
                         Rose, you're no picnic... you're a 
                         spoiled little brat even, but under 
                         that you're a strong, pure heart, 
                         and you're the most amazingly 
                         astounding girl I've ever known and --

                                     ROSE
                         Jack, I --

                                     JACK
                         No wait. Let me try to get this out. 
                         You're amazing... and I know I have 
                         nothing to offer you, Rose. I know 
                         that. But I'm involved now. You jump, 
                         I jump, remember? I can't turn away 
                         without knowin' that you're goin' to 
                         be alright.

               Rose feels the tears coming to her eyes. Jack is so open and 
               real... not like anyone she has ever known.

                                     ROSE
                         You're making this very hard. I'll 
                         be fine. Really.

                                     JACK
                         I don't think so. They've got you in 
                         a glass jar like some butterfly, and 
                         you're goin' to die if you don't 
                         break out. Maybe not right away, 
                         'cause you're strong. But sooner or 
                         later the fire in you is goin' to go 
                         out.

                                     ROSE
                         It's not up to you to save me, Jack.

                                     JACK
                         You're right. Only you can do that.

                                     ROSE
                         I have to get back, they'll miss me. 
                         Please, Jack, for both our sakes, 
                         leave me alone.

                                                                    CUT TO:

               INT. FIRST CLASS LOUNGE - DAY

               The most elegant room on the ship, done in Louis Quinze 
               Versaille style. Rose sits on a divan, with a group of other 
               women arrayed around her. Ruth, the Countess Rothes and Lady 
               Duff-Gordon are taking tea. Rose is silent and still as a 
               porcelain figurine as the conversation washes around her.

                                     RUTH
                         Of course the invitations had to be 
                         sent back to the printers twice. And 
                         the bridesmaids dresses! Let me tell 
                         you what an odyssey that has been...

               TRACKING SLOWLY IN on Rose as Ruth goes on.

               REVERSE - ROSE'S POV

               A tableau of MOTHER and DAUGHTER having tea. The four year 
               old girl, wearing white gloves, daintily picking up a cookie. 
               The mother correcting her on her posture, and the way she 
               holds the teacup. The little girl is trying so hard to please, 
               her expression serious. A glimpse of Rose at that age, and 
               we see the relentless conditioning... the pain to becoming 
               an Edwardian geisha.

               ON ROSE

               She calmly and deliberately turns her teacup over, spilling 
               tea all over her dress.

                                     ROSE
                         Oh, look what I've done.

                                                                    CUT TO:

               EXT. TITANIC - DAY

               TITANIC STEAMS TOWARD US, in the dusk light, as if lit by 
               the embers of a giant fire. As the ship looms, FILLING FRAME, 
               we push in on the bow. Jack is there, right at the apex of 
               the bow railing, his favorite spot. He closes his eyes, 
               letting the chill wind clear his head.

               Jack hears her voice, behind him...

                                     ROSE
                         Hello, Jack.

               He turns and she is standing there.

                                     ROSE
                         I changed my mind.

               He smiles at her, his eyes drinking her in. Her cheeks are 
               red with the chill wind, and her eyes sparkle. Her hair blows 
               wildly about her face.

                                     ROSE
                         Fabrizio said you might be up --

                                     JACK
                         Sssshh. Come here.

               He puts his hands on her waist. As if he is going to kiss 
               her.

                                     JACK
                         Close your eyes.

               She does, and he turns her to face forward, the way the ship 
               is going. He presses her gently to the rail, standing right 
               behind her. Then he takes her two hands and raises them until 
               she is standing with her arms outstetched on each side. Rose 
               is going along with him. When he lowers his hands, her arms 
               stay up... like wings.

                                     JACK
                         Okay. Open them.

               Rose gasps. There is nothing in her field of vision but water. 
               It's like there is no ship under them at all, just the two 
               of them soaring. The Atlantic unrolls toward her, a hammered 
               copper shield under a dusk sky. There is only the wind, and 
               the hiss of the water 50 feel below.

                                     ROSE
                         I'm flying!

               She leans forward, arching her back. He puts his hands on 
               her waist to steady her.

                                     JACK
                              (singing softly)
                         Come Josephine in my flying machine...

               Rose closes her eyes, feeling herself floating weightless 
               far above the sea. She smiles dreamily, then leans back, 
               gently pressing her back against his chest. He pushes forward 
               slightly against her.

               Slowly he raises his hands, arms outstretched, and they meet 
               hers... fingertips gently touching. Then their fingers 
               intertwine. Moving slowly, their fingers caress through and 
               around each other like the bodies of two lovers.

               Jack tips his face forward into her blowing hair, letting 
               the scent of her wash over him, until his cheek is against 
               her ear.

               Rose turns her head until her lips are near his. She lowers 
               her arms, turning further, until she finds his mouth with 
               hers. He wraps his arms around her from behind, and they 
               kiss like this with her head turned and tilted back, 
               surrendering to him, to the emotion, to the inevitable. They 
               kiss, slowly and tremulously, and then with building passion.

               Jack and the ship seem to merge into one force of power and 
               optimism, lifting her, buoying her forward on a magical 
               journey, soaring onward into a night without fear.

               IN THE CROW'S NEST, high above and behind them, lookout 
               FREDERICK FLEET nudges his mate, REGINALD LEE, pointing down 
               at the figures in the bow.

                                     FLEET
                         Wish I had those bleedin' binoculars.

               JACK AND ROSE

               Embracing at the bow rail, DISSOLVE SLOWLY AWAY, leaving the 
               ruined bow of the WRECK --

                                                                    CUT TO:

               INT. KELDYSH IMAGING SHACK

               OLD ROSE blinks, seeming to come back to the present. She 
               sees the wreck on the screen, the sad ghost ship deep in the 
               abyss.

                                     ROSE
                         That was the last time Titanic ever 
                         saw daylight.

               Brock Lovett changes the tape in the minicassette recorder.

                                     BROCK
                         So we're up to dusk on the night of 
                         the sinking. Six hours to go.

                                     BODINE
                         Don't you love it? There's Smith, 
                         he's standing there with the iceberg 
                         warning in his fucking hand...
                              (remembering Rose)
                         ...excuse me... in his hand, and 
                         he's ordering more speed.

                                     BROCK
                         26 years of experience working against 
                         him. He figures anything big enough 
                         to sink the ship they're going to 
                         see in time to turn. But the ship's 
                         too big, with too small a rudder... 
                         it can't corner worth shit. Everything 
                         he knows is wrong.

               Rose is ignoring this conversation. She has the art-nouveau 
               comb with the jade butterfly on the handle in her hands, 
               turning it slowly. She is watching a monitor, which shows 
               the ruins of Suite B-52/56. PUSH IN until the image fills 
               frame.

                                                                TRANSITION:

               INT. ROSE'S SUITE

               ...1912. Like in a dream the beautiful woodwork and satin 
               upholstery emerge from the rusted ruin. Jack is overwhelmed 
               by the opulence of the room. He sets his sketchbook and 
               drawing materials on the marble table.

                                     ROSE
                         Will this light do? Don't artists 
                         need good light?

                                     JACK
                              (bad French accent)
                         Zat is true, I am not used to working 
                         in such 'orreeble conditions.
                              (seeing the paintings)
                         Hey... Monet!

               He crouches next to the paintings stacked against the wall.

                                     JACK
                         Isn't he great... the use of color? 
                         I saw him once... through a hole in 
                         this garden fence in Giverny.

               She goes into the adjoining walk-in wardrobe closet. He sees 
               her go to the safe and start working the combination. He's 
               fascinated.

                                     ROSE
                         Cal insist on lugging this thing 
                         everywhere.

                                     JACK
                         Should I be expecting him anytime 
                         soon?

                                     ROSE
                         Not as long as the cigars and brandy 
                         hold out.

               CLUNK! She unlocks the safe. Glancing up, she meets his eyes 
               in the mirror behind the safe. She opens it and removes the 
               necklace, then holds it out to Jack who takes it nervously.

                                     JACK
                         What is it? A sapphire?

                                     ROSE
                         A diamond. A very rare diamond, called 
                         the Heart of the Ocean.

               Jack gazes at wealth beyond his comprehension.

                                     ROSE
                         I want you to draw me like your French 
                         girl. Wearing this.
                              (she smiles at him)
                         Wearing only this.

               He looks up at her, surprised, and we...

                                                                    CUT TO:

               ROSE'S BEDROOM

               ON THE BUTTERFLY COMB as Rose draws it out of her hair. She 
               shakes her head and her hair falls free around her shoulders.

               IN THE SITTING ROOM

               Jack is laying out his pencils like surgical tools. His 
               sketchbook is open and ready. He looks up as she comes into 
               the room, wearing a silk kimono.

                                     ROSE
                         The last thing I need is another 
                         picture of me looking like a china 
                         doll. As a paying customer, I expect 
                         to get what I want.

               She hands him a dime and steps back, parting the kimono. The 
               blue stone lies on her creamy breast. Her heart is pounding 
               as she slowly lowers the robe.

               Jake looks so stricken, it is almost comical. The kimono 
               drops to the floor (this is all in cuts, lyrical).

                                     ROSE
                         Tell me when it looks right to you.

               She poses on the divan, settling like a cat into the position 
               we remember from the drawing... almost.

                                     JACK
                         Uh... just bend your left leg a little 
                         and... and lower your head. Eyes to 
                         me. That's it.

               Jack starts to sketch. He drops his pencil and she stifles a 
               laugh.

                                     ROSE
                         I believe you are blushing, Mr. Big 
                         Artiste. I can't imagine Monsieur 
                         Monet blushing.

                                     JACK
                              (sweating)
                         He does landscapes.

               TIGHT ON JACK as his eyes come up to look at her over the 
               top edge of his sketchpad. We have seen this image of him 
               before, in her memory. It is an image she will carry the 
               rest of her life.

               Despite his nervousness, he draws with sure strokes, and 
               what emerges is the best thing he has ever done. Her pose is 
               languid, her hands beautiful, and her eyes radiate her energy.

               PUSH SLOWLY IN ON ROSE'S FACE...

                                                                TRANSITION:

               INT. KELDYSH / IMAGING SHACK

               MATCH DISSOLVE/MORPH to Rose, 101 years old. Only her eyes 
               are the same.

                                     OLD ROSE
                         My heart was pounding the whole time. 
                         It was the most erotic moment of my 
                         life... up till then at least.

                                                            CUT TO REVERSE:

               A semicircle of listeners staring in rapt, frozen silence. 
               The story of Jack and Rose has finally and completely grabbed 
               them.

                                     BODINE
                         What, uh... happened next?

                                     OLD ROSE
                              (smiling)
                         You mean, did we "do it"?

                                                                    CUT TO:

               INT. ROSE AND CAL'S SUITE - NIGHT

               BACK TO 1912. Jack is signing the drawing. Rose, wearing her 
               kimono again, is leaning on his shoulder, watching.

                                     OLD ROSE (V.O.)
                         Sorry to disappoint you Mr. Bodine.

               Rose gazes at the drawing. He has X-rayed her soul.

                                     ROSE
                         Date it, Jack. I want to always 
                         remember this night.

               He does: 4/14/1912. Rose meanwhile scribbles a note on a 
               piece of Titanic stationary. We don't see what it says. She 
               accepts the drawing from him, and crosses to the safe in the 
               wardrobe.

               She puts the diamond back in the safe, placing the drawing 
               and the note on top of it. Closes the door with a CLUNK!

                                                                    CUT TO:

               INT. FIRST CLASS SMOKING ROOM - NIGHT

               Lovejoy enters from the Palm Court through the revolving 
               door and crosses the room toward Hockley. A fire is blazing 
               in the marble fireplace, and the usual fatcats are playing 
               cards, drinking and talking. Cal sees Lovejoy and detaches 
               from his group, coming to him.

                                     LOVEJOY
                         None of the stewards have seen her.

                                     CAL
                              (low but forceful)
                         This is ridiculous, Lovejoy. Find 
                         her.

                                                                    CUT TO:

               EXT. ATLANTIC - NIGHT

               TITANIC glides across an unnatural sea, black and calm as a 
               pool of oil. The ships lights are mirrored almost perfectly 
               in the black water. The sky is brilliant with stars. A meteor 
               traces a bright line across the heavens.

               ON THE BRIDGE

               Captain Smith peers out at the blackness ahead of the ship. 
               QUARTERMASTER HITCHINS brings him a cup of hot tea with lemon. 
               It steams in the bitter cold of the open bridge. Second 
               Officer Lightoller is next to him, staring out at the sheet 
               of black glass the Atlantic has become.

                                     LIGHTOLLER
                         I don't think I've ever seen such a 
                         flat calm, in 24 years at sea.

                                     SMITH
                         Yes, like a mill pond. Not a breath 
                         of wind.

                                     LIGHTOLLER
                         It's make the bergs harder to see, 
                         with no breaking water at the base.

                                     SMITH
                         Mmmmm. Well, I'm off. Maintain speed 
                         and heading, Mr. Lightoller.

                                     LIGHTOLLER
                         Yes sir.

                                     SMITH
                         And wake me, of course, if anything 
                         becomes in the slightest degree 
                         doubtful.

                                                                    CUT TO:

               INT. ROSE AND CAL'S SUITE

               Rose, fully dressed now, returns to the sitting room. They 
               hear a key in the lock. Rose takes Jack's hand and leads him 
               silently through the bedrooms. Lovejoy enters by the sitting 
               room door.

                                     LOVEJOY
                         Miss Rose? Hello?

               He hears a door opening and goes through Cal's room toward 
               hers.

                                                                    CUT TO:

               INT. CORRIDOR OUTSIDE SUITE

               Rose and Jack come out of her stateroom, closing the door. 
               She leads him quickly along the corridor toward the B deck 
               foyer. They are halfway across the open space when the sitting 
               room door opens in the corridor and Lovejoy comes out. The 
               valet sees Jack with Rose and hustles after them.

                                     ROSE
                         Come on!

               She and Jack break into a run, surprising the few ladies and 
               gentlemen about. Rose leads him past the stairs to the bank 
               of elevators. They run into one, shocking the hell out of 
               the OPERATOR.

                                     ROSE
                         Take us down. Quickly, quickly!

               The Operator scrambles to comply. Jack even helps him close 
               the steel gate. Lovejoy runs up as the lift starts to descend. 
               He slams one hand on the bars of the gate. Rose makes a very 
               rude and unladylike gesture, and laughs as Lovejoy disappears 
               above. The Operator gapes at her.

                                                                    CUT TO:

               INT. E-DECK FOYER / ELEVATORS

               Lovejoy emerges from another lift and runs to the one Jack 
               and Rose were in. The Operator is just closing the gate to 
               go back up. Lovejoy runs around the bank of elevators and 
               scans the foyer... no Jack and Rose. He tries the stairs 
               going down to F-Deck.

                                                                    CUT TO:

               INT. F-DECK CORRIDORS / FAN ROOM

               A functional space, with access to a number of machine spaces 
               (fan rooms, boiler uptakes). Jack and Rose are leaning against 
               a wall, laughing.

                                     JACK
                         Pretty tough for a valet, this fella.

                                     ROSE
                         He's an ex-Pinkerton. Cal's father 
                         hired him to keep Cal out of 
                         trouble... to make sure he always 
                         got back to the hotel with his wallet 
                         and watch, after some crawl through 
                         the less reputable parts of town...

                                     JACK
                         Kinda like we're doin' right now -- 
                         uh oh!

               Lovejoy has spotted them from a cross-corridor nearby. He 
               charges toward them. Jack and Rose run around a corner into 
               a blind alley. There is one door, marked "CREW ONLY", and 
               Jack flings it open.

               They enter a roaring RAN ROOM, with no way out but a ladder 
               going down. Jack latches the deadbolt on the door, and Lovejoy 
               slams against it a moment later. Jack grins at Rose, pointing 
               to the ladder.

                                     JACK
                         After you, m'lady.

                                                                    CUT TO:

               INT. BOILER ROOM FIVE AND SIX

               Jack and Rose come down the escape ladder and look around in 
               amazement. It is like a vision of hell itself, with the 
               roaring furnaces and black figures moving in the smoky glow. 
               They run the length of the boiler room, dodging amazed 
               stokers, and trimmers with their wheelbarrows of coal.

                                     JACK
                              (shouting over the 
                              din)
                         Carry on! Don't mind us!

               They run through the open watertight door into BOILER ROOM 
               SIX. Jack pulls her through the fiercely hot alley between 
               two boilers and they wind up in the dark, out of sight of 
               the working crew. Watching from the shadows, they see the 
               stokers working in the hellish glow, shovelling coal into 
               the insatiable maws of the furnaces. The whole place thunders 
               with the roar of the fires.

                                                                    CUT TO:

               INT. FIRST CLASS SMOKING ROOM

               Amid unparalleled luxury, Cal sits at a card game, sipping 
               brandy.

                                     COLONEL GRACIE
                         We're going like hell I tell you. I 
                         have fifty dollars that says we make 
                         it into New York Tuesday night!

               Cal looks at his gold pocket watch, and scowls, not listening.

                                                                    CUT TO:

               INT. BOILER ROOM SIX

               The furnaces roar, silhouetting the glistening stokers. Jack 
               kisses Rose's face, tasting the sweat trickling down from 
               her forehead. They kiss passionately in the steamy, pounding 
               darkness.

                                                                    CUT TO:

               INT. HOLD #2

               Jack and Rose enter and run laughing between the rows of 
               stacked cargo. She hugs herself against the cold, after the 
               dripping heat of the boiler room.

               They come upon William Carter's brand new RENAULT touring 
               car, lashing down to a pallet. It looks like a royal coach 
               from a fairy tale, its brass trim and headlamps nicely set 
               off by its deep burgundy color.

               Rose climbs into the plushly upholstered back seat, acting 
               very royal. There are cut crystals bud vases on the walls 
               back there, each containing a rose. Jack jumps into the 
               driver's seat, enjoying the feel of the leather and wood.

                                     JACK
                         Where to, Miss?

                                     ROSE
                         To the stars.

               ON JACK

               As her hands come out of the shadows and pull him over the 
               seat into the back. He lands next to her, and his breath 
               seems loud in the quiet darkness. He looks at her and she is 
               smiling. It is the moment of truth.

                                     JACK
                         Are you nervous?

                                     ROSE
                         Au contraire, mon cher.

               He strokes her face, cherishing her. She kisses his artist's 
               fingers.

                                     ROSE
                         Put your hands on me Jack.

               He kisses her, and she slides down in the seat under his 
               welcome weight.

                                                                    CUT TO:

               INT. WIRELESS ROOM

               A BRILLIANT ARC OF ELECTRICITY fills frame -- the sparks gap 
               of the Marconi instrument as SENIOR WIRELESS OPERATOR JACK 
               PHILLIPS (24) rapidly keys out a message. Junior Operator 
               Bride looks through the huge stack of outgoing messages 
               swamping them.

                                     BRIDE
                         Look at this one, he wants his private 
                         train to meet him. La dee da.
                              (slaps them down)
                         We'll be up all bloody night on this 
                         lot.

               Phillips start to receive an incoming message from a nearby 
               ship, the Leyland freighter CALIFORNIAN, which jams his 
               outgoing signal. At such close range, the beeps are deafening.

                                     PHILLIPS
                         Christ! It's that idiot on the 
                         Californian.

               Cursing, Phillips furiously keys a rebuke.

                                                                    CUT TO:

               INT. / EXT. WIRELESS SHACK / FREIGHTER CALIFORNIAN

               Wireless Operator CYRIL EVANS pulls his earphone off his ear 
               as the Titanic's spark deafens him. He translates the message 
               for THIRD OFFICER GROVES.

                                     EVANS
                         Stupid bastard. I try to warn him 
                         about the ice, and he says "Keep 
                         out. Shut up. I'm working Cape Race."

                                     GROVES
                         Now what's he sending?

                                     EVANS
                         "No seasickness. Poker business good. 
                         Al". Well that's it for me. I'm 
                         shutting down.

               As Evans wearily switches off his generator, Groves goes out 
               on deck. PAN OFF him to reveal the ship is stopped fifty 
               yards from the edge of a field of pack ice and icebergs 
               stretching as far as the eye can see.

                                                                    CUT TO:

               EXT. OCEAN / TITANIC

               ON TITANIC

               Steaming hellbent through the darkness, hurling up white 
               water at the bows. The bow comes straight at us, until the 
               bow wave WIPES THE FRAME --

                                                                    CUT TO:

               INT. HOLD #2

               PUSHING IN on the rear window of the Renault, which is 
               completely fogged up. Rose's hand comes up and slams against 
               the glass for a moment, making a handprint in the veil of 
               condensation.

               INSIDE THE CAR

               Jack's overcoat is like a blanket over them. It stirs and 
               Rose pulls it down. They are huddled under it, intertwined, 
               still mostly clothed. Their faces are flushed and they look 
               at each other wonderingly. She puts her hand on his face, as 
               if making sure he is real.

                                     ROSE
                         You're trembling.

                                     JACK
                         It's okay. I'm alright.

               He lays his cheek against her chest.

                                     JACK
                         I can feel your heart beating.

               She hugs his head to her chest, and just holds on for dear 
               life.

                                     OLD ROSE (V.O.)
                         Well, I wasn't the first teenage 
                         girl to get seduced in the backseat 
                         of a car, and certainly not the last, 
                         by several million. He had such fine 
                         hands, artists' hands, but strong 
                         too... roughened by work. I remember 
                         their touch even now.

                                                                    CUT TO:

               EXT. ATLANTIC / TITANIC - NIGHT

               The bow sweeps under us, and the CAMERA CLIMBS toward the 
               foremast and the tiny half-cylinder of the crow's nest, which 
               grows as we push in on lookouts Fleet and Lee. They are 
               stamping their feet and swinging their arms, trying to keep 
               warm in the 22 knot freezing wind, which whips capor of their 
               breath away behind.

                                     FLEET
                         You can smell ice, you know, when 
                         it's near.

                                     LEE
                         Bollocks.

                                     FLEET
                         Well I can.

                                                                    CUT TO:

               INT. BOILER ROOM SIX

               Without hearing the words over the roar of the furnaces, we 
               see stokers telling TWO STEWARDS which way Rose and Jack 
               went. The stewards move off toward the forward holds.

                                                                    CUT TO:

               INT. CAL AND ROSE'S SUITE

               Cal stands at the open safe. He stares at the drawing of 
               Rose and his face clenches with fury. He reads the not again: 
               "DARLING, NOW YOU CAN KEEP US BOTH LOCKED IN YOUR SAFE, ROSE".

               Lovejoy, standing behind him, looks over his shoulder at the 
               drawing. Cal crumples Rose's note, then takes the drawing in 
               both hands as if to rip it in half. He tenses to do it, then 
               stops himself.

                                     CAL
                         I have a better idea.

                                                                    CUT TO:

               INT. HOLD #2 - NIGHT

               The two stewards enter. They have electric torches and play 
               the beams around the hold. They spot the Renault with its 
               fogged up rear window and approach it slowly.

               FROM INSIDE

               We see the torch light up Rose's passionate handprint, still 
               there on the fogged up glass. One steward whips open the 
               door.

                                     STEWARD
                         Got yer!

               REVERSE:

               The back seat is empty.

                                                                    CUT TO:

               EXT. FORWARD WELL DECK AND CROW'S NEST - NIGHT

               Rose and Jack, fully dressed, come through a crew door onto 
               the deck. They can barely stand, they are laughing so hard.

               UP ABOVE THEM, IN THE CROW'S NEST, lookout Fleet hears the 
               disturbance below and looks around and back down to the well 
               deck, where he can see two figures embracing.

               Jack and Rose stand in each others arms. Their breath clouds 
               around them in the now freezing air, but they don't even 
               feel the cold.

                                     ROSE
                         When this ship docks, I'm getting 
                         off with you.

                                     JACK
                         This is crazy.

                                     ROSE
                         I know. It doesn't make any sense. 
                         That's why I trust it.

               Jack pulls her to him and kisses her fiercely.

               IN THE CROW'S NEST

               Fleet nudges Lee.

                                     FLEET
                         Cor... look at that, would ya.

                                     LEE
                         They're a bloody sight warmer than 
                         we are.

                                     FLEET
                         Well if that's what it takes for us 
                         two to get warm, I'd rather not, if 
                         it's all the same.

               They both have a good laugh at that one. It is Fleet whose 
               expression falls first. Glancing forward again, he does a 
               double take. The color drains out of his face.

               FLEET'S POV

               A massive iceberg right in their path, 500 yards out.

                                     FLEET
                         Bugger me!!

               Fleet reaches past Lee and rings the lookout bell three times, 
               then grabs the telephone, calling the bridge. He waits 
               precious seconds for it to be picket up, never taking his 
               eyes off the black mass ahead.

                                     FLEET
                         Pick up, ya bastard.

                                                                    CUT TO:

               INT. / EXT. BRIDGE

               Inside the enclosed wheelhouse, SIXTH OFFICER MOODY walks 
               unhurriedly to the telephone, picking it up.

                                     FLEET (V.O.)
                         Is someone there?

                                     MOODY
                         Yes. What do you see?

                                     FLEET
                         Iceberg right ahead!

                                     MOODY
                         Thank you.
                              (hangs up, calls to 
                              Murdoch)
                         Iceberg right ahead!

               Murdoch sees it and rushes to the engine room telegraph. 
               While signaling "FULL SPEED ASTERN" he yells to Quartermaster 
               Hitchins, who is at the wheel.

                                     MURDOCH
                         Hard a' starboard.

                                     MOODY
                              (standing behind 
                              Hitchins)
                         Hard a' starboard. The helm is hard 
                         over, sir.

               CRASH SEQUENCE / SERIES OF CUTS:

               CHIEF ENGINEER BELL is just checking the soup he has warming 
               on a steam manifold when the engine telegraph clangs, then 
               goes... incredibly... to FULL SPEED ASTERN. He and the other 
               ENGINEERS just stare at it a second, unbelieving. Then Bell 
               reacts.

                                     BELL
                         Full astern! FULL ASTERN!!

               The engineers and greasers like madmen to close steam valves 
               and start braking the mighty propeller shafts, big as Sequias, 
               to a stop.

               IN BOILER ROOM SIX

               Leading Stoker FREDERICK BARRETT is standing with 2nd Engineer 
               JAMES HESKETH when the red warning light and "STOP" indicator 
               come on.

                                     BARRETT
                         Shut all dampers! Shut 'em!!

               FROM THE BRIDGE

               Murdoch watches the burg growing... straight ahead. The bow 
               finally starts to come left (since the ship turns the reverse 
               of the helm setting).

               Murdoch's jaw clenches as the bow turns with agonizing 
               slowness. He holds his breath as the horrible physics play 
               out.

               IN THE CROW'S NEST

               Frederick Fleet braces himself.

               THE BOW OF THE SHIP

               Thunders right at CAMERA and --

               KRUUUNCH!! The ship hits the berg on its starboard bow.

               UNDERWATER

               We see the ice smashing in the steel hull plates. The iceberg 
               bumps and scrapes along the side of the ship. Rivets pop as 
               the steel plate of the hull flexes under the load.

               IN #2 HOLD

               The two stewards stagger as the hull buckles in four feet 
               with a sound like THUNDER. Like a sledgehammer beating along 
               outside the ship, the berg splits the hull plates and the 
               sea pours in, sweeping them off their feet. The icy water 
               swirls around the Renault as the men scramble for the stairs.

               ON G-DECK

               Forward Fabrizio is tossed in his bunk by the impact. He 
               hears a sound like the greatly amplified squeal of a skate 
               on ice.

               IN BOILER ROOM SIX

               Barret and Hesketh stagger as they hear the ROLLING THUNDER 
               of the collision. They see the starboard side of the ship 
               buckle in toward them and are almost swept off their feet by 
               a rush of water coming in about two feet above the floor.

               ON THE FORWARD WELL DECK

               Jack and Rose break their kiss and look up in astonishment 
               as the berg sails past, blocking out the sky like a mountain. 
               Fragments break off it and crash down onto the deck, and 
               they have to jump back to avoid flying chunks of ice.

               ON THE BRIDGE

               Murdoch rings the watertight door alarm. He quickly throws 
               the switch that closes them.

                                     MURDOCH
                         Hard a' port!

               Judging the berg to be amidships, he is trying to clear the 
               stern.

               BARRETT AND HESKETH

               Hear the DOOR ALARM and scramble through the swirling water 
               to the watertight door between Boiler Rooms 6 and 5. The 
               room is full of water vapor as the cold sea strikes the red 
               hot furnaces. Barrett yells to the stokers scrambling through 
               the door as it comes down like a slow guillotine.

                                     BARRETT
                         Go Lads! Go! Go!

               He dives through into Boiler Room 5 just before the door 
               rumbles down with a CLANG.

               JACK AND ROSE

               Rush to the starboard rail in time to see the berg moving 
               aft down the side of the ship.

               In his stateroom, surrounded by piles of plans while making 
               notes in his ever-present book, Andrews looks up at the sound 
               of a cut-crystal light fixture tinkling like a windchime.

               He feels the shudder run through the ship. And we see it in 
               his face. Too much of his soul is in this great ship for him 
               not to feel its mortal wound.

               IN THE FIRST CLASS SMOKING ROOM

               Gracie watches his highball vibrating on the table.

               IN THE PALM COURT

               With its high arched windows, Molly Brown holds up her drink 
               to a passing waiter.

                                     MOLLY
                         Hey, can I get some ice here, please?

               Silently, a moving wall of ice fills the window behind her. 
               She doesn't see it. It disappears astern.

               IN THE CROW'S NEST

               Fleet turns to his Lee...

                                     FLEET
                         Oy, mate... that was a close shave.

                                     LEE
                         Smell ice, can you? Bleedin' Christ!

                                                                    CUT TO:

               INT. / EXT. BRIDGE

               CLOSE ON MURDOCH

               The alarm bells still clatter mindlessly, seeming to reflect 
               his inner state. He is in shock, unable to get a grip on 
               what just happened. He just ran the biggest ship in history 
               into an iceberg on its maiden voyage.

                                     MURDOCH
                              (stiffly, to Moody)
                         Note the time. Enter it in the log.

               Captain Smith rushes out of his cabin onto the bridge, tucking 
               in his shirt.

                                     SMITH
                         What was that, Mr. Murdoch?

                                     MURDOCH
                         An iceberg, sir. I put her hard a' 
                         starboard and run the engines full 
                         astern, but it was too close. I tried 
                         to port around it, but she hi... and 
                         I --

                                     SMITH
                         Close the emergency doors.

                                     MURDOCH
                         The doors are closed.

               Together they rush out onto the starboard wing, and Murdoch 
               points. Smith looks into the darkness aft, then wheels around 
               to FOURTH OFFICER BOHALL.

                                     SMITH
                         Find the Carpenter and get him to 
                         sound the ship.

                                                                    CUT TO:

               INT. G-DECK FORWARD

               In steerage, Fabrizio comes out into the hall to see what's 
               going on. He sees dozens of rats running toward him in the 
               corridor, fleeing the flooding bow. Fabrizio jumps aside as 
               the rats run by.

                                     FABRIZIO
                         Ma -- che cazzo!

               IN HIS STATEROOM

               Tommy gets out of his top bunk in the dark and drops down to 
               the floor. SPLASH!!

                                     TOMMY
                         Cor!! What in hell?!

               He snaps on the light. The floor is covered with 3 inches of 
               freezing water, and more coming in. He pulls the door open, 
               and steps out into the corridor, which is flooded. Fabrizio 
               is running toward him, yelling something in Italian. Tommy 
               and Fabrizio start pounding on doors, getting everybody up 
               and out. The alarm spreads in several languages.

                                                                    CUT TO:

               INT. FIRST CLASS CORRIDOR / A-DECK

               A couple of people have come out into the corridor in robes 
               and slippers. A STEWARD hurries along, reassuring them.

                                     WOMAN
                         Why have the engines stopped? I felt 
                         a shudder?

                                     STEWARD #1
                         I shouldn't worry, m'am. We've likely 
                         thrown a propeller blade, that's the 
                         shudder you felt. May I bring you 
                         anything?

               THOMAS ANDREWS brushes past them, walking fast and carrying 
               an armload of rolled up ship's plans.

                                                                    CUT TO:

               EXT. FORWARD WELL DECK

               Jack and Rose are leaning over the starboard rail, looking 
               at the hull of the ship.

                                     JACK
                         Looks okay. I don't see anything.

                                     ROSE
                         Could it have damaged the ship?

                                     JACK
                         It didn't seem like much of a bump. 
                         I'm sure we're okay.

               Behind them a couple of steerage guys are kicking the ice 
               around the deck, laughing.

                                                                    CUT TO:

               INT. STEERAGE FORWARD

               Fabrizio and Tommy are in a crowd of steerage men clogging 
               the corridors, heading aft away from the flooding. Many of 
               them have grabbed suitcases and duffel bags, some of which 
               are soaked.

                                     TOMMY
                         If this is the direction the rats 
                         were runnin', it's good enough for 
                         me.

                                                                    CUT TO:

               INT. CORRIDOR ON B DECK

               Bruce Ismay, dressed in pajamas under the topcoat, hurries 
               down the corridor, headed for the bridge. An officious steward 
               named BARNES comes along the other direction, getting the 
               few concerned passengers back into their rooms.

                                     STEWARD BARNES
                         There's no cause for alarm. Please, 
                         go back to your rooms.

               He is stopped in his tracks by Cal and Lovejoy.

                                     STEWARD BARNES
                         Please, sir. There's no emergency --

                                     CAL
                         Yes there is, I have been robbed. 
                         Now get the Master at Arms. Now you 
                         moron!

                                                                    CUT TO:

               INT. BRIDGE / CHARTROOM

               CLOSEUP OF CAPTAIN SMITH studying the commutator.

               He turns to Andrews, standing behind him.

                                     SMITH
                         A five degree list in less than ten 
                         minutes.

               SHIP'S CARPENTER JOHN HUTCHINSON enters behind him, out of 
               breath and clearly unnerved.

                                     HUTCHINSON
                         She's making water fast... in the 
                         forepeak tank and the forward holds, 
                         in boiler room six.

               Ismay enters, his movements quick with anger and frustration. 
               Smith glances at him with annoyance.

                                     ISMAY
                         Why have we stopped?

                                     SMITH
                         We've struck ice.

                                     ISMAY
                         Well, do you think the ship is 
                         seriously damaged?

                                     SMITH
                              (glaring)
                         Excuse me.

               Smith pushes past him, with Andrews and Hutchinson in tow.

                                                                    CUT TO:

               INT. BOILER ROOM

               Strokers and firemen are struggling to draw the fires. They 
               are working in waist deep water churning around as it flows 
               into the boiler room, ice cold and swirling with grease from 
               the machinery. Chief Engineer Bell comes partway down the 
               ladder and shouts.

                                     BELL
                         That's it, lads. Get the hell up!

               They scramble up the escape ladders.

                                                                    CUT TO:

               EXT. B-DECK FORWARD / WELL DECK

               The gentlemen, now joined by another man, leans on the forward 
               rail watching the steerage men playing soccer with chunks of 
               ice.

                                     GENTLEMAN
                         I guess it's nothing too serious. 
                         I'm going back to my cabin to read.

               A 20ish YALE MAN pops through the door wearing a topcoat 
               over pajamas.

                                     YALEY
                         Say, did I miss the fun?

               Rose and Jack come up the steps from the well deck, which 
               are right next to the three men. They stare as the couple 
               climbs over the locked gate.

               A moment later Captain Smith rounds the corner, followed by 
               Andrews and Carpenter Hutchinson. They have come down from 
               the bridge by the outside stairs. The three men, their faces 
               grim, crush right past Jack and Rose. Andrews barely glances 
               at her.

                                     SMITH
                         Can you shore up?

                                     HUTCHINSON
                         Not unless the pumps get ahead.

               The inspection party goes down the stairs to the well deck.

                                     JACK
                              (low, to her)
                         It's bad.

                                     ROSE
                         We have to tell Mother and Cal.

                                     JACK
                         Now it's worse.

                                     ROSE
                         Come with me, Jack. I jump, you 
                         jump... Right?

                                     JACK
                         Right.

               Jack follows Rose through the door inside the ship.

                                                                    CUT TO:

               INT. B-DECK FOYER / CORRIDOR

               Jack and Rose cross the foyer, entering the corridor. Lovejoy 
               is waiting for them in the hall as they approach the room.

                                     LOVEJOY
                         We've been looking for you miss.

               Lovejoy follows and, unseen, moves close behind Jack and 
               smoothly slips the diamond necklace into the pocket of his 
               overcoat.

                                                                    CUT TO:

               INT. ROSE AND CAL'S SUITE

               Cal and Ruth wait in the sitting room, along with the Master 
               at Arms and two stewards (Steward #1 and Barnes). Silence as 
               Rose and Jack enter. Ruth closes her robe at her throat when 
               she sees Jack.

                                     ROSE
                         Something serious has happened.

                                     CAL
                         That's right. Two things dear to me 
                         have disappeared this evening. Now 
                         that one is back...
                              (he looks from Rose 
                              to Jack)
                         ...I have a pretty good idea where 
                         to find the other.
                              (to Master at Arms)
                         Search him.

               The Master at Arms steps up to Jack.

                                     MASTER AT ARMS
                         Coat off, mate.

               Lovejoy pulls at Jack's coat and Jack shakes his head in 
               dismay, shrugging out of it. The Master at Arms pats him 
               down.

                                     JACK
                         This is horseshit.

                                     ROSE
                         Cal, you can't be serious! We're in 
                         the middle of an emergency and you --

               Steward Barnes pulls the Heart of the Ocean out of the pocket 
               of Jack's coat.

                                     STEWARD BARNES
                         Is this it?

               Rose is stunned. Needless to say, so is Jack.

                                     CAL
                         That's it.

                                     MASTER AT ARMS
                         Right then. Now don't make a fuss.

               He starts to handcuff Jack.

                                     JACK
                         Don't you believe it, Rose. Don't!

                                     ROSE
                              (uncertain)
                         He couldn't have.

                                     CAL
                         Of course he could. Easy enough for 
                         a professional. He memorized the 
                         combination when you opened the safe.

               FLASHBACK

               Rose at the safe, looking in the mirror and meeting Jack's 
               eyes as he stands behind her, watching.

                                     ROSE
                         But I was with him the whole time.

                                     CAL
                              (just to her, low and 
                              cold)
                         Maybe he did it while you were putting 
                         your clothes back on.

                                     JACK
                         They put it in my pocket!

                                     LOVEJOY
                              (holding Jack's coat)
                         It's not even your pocket, son.
                              (reading)
                         "Property of A. L. Ryerson".

               Lovejoy shows the coat to the Master at Arms. There is a 
               label inside the collar with the owner's name.

                                     MASTER AT ARMS
                         That was reported stolen today.

                                     JACK
                         I was going to return it! Rose --

               Rose feels utterly betrayed, hurt and confused. She shrinks 
               away from him. He starts shouting to her as Lovejoy and the 
               Master at Arms drag him out into the hall. She can't look 
               him in the eye.

                                     JACK
                         Rose, don't listen to them... I didn't 
                         do this! You know I didn't! You know 
                         it!

               She is devastated. Her mother lays a comforting hand on her 
               shoulder as the tears well up.

                                     RUTH
                         Why do women believe men?

                                                                    CUT TO:

               INT. MAIL SORTING ROOM / HOLD

               Smith and Andrews come down the steps to the Mail Sorting 
               Room and finds the clerks scrambling to pull mail from the 
               racks. They are furiously hauling wet sacks of mail up from 
               the hold below.

               Andrews climbs part way down the stairs to the hold, which 
               is almost full. Sacks of mail float everywhere. The lights 
               are still on below the surface, casting an eerie glow. The 
               Renault is visible under the water, the brass glinting 
               cheerfully. Andrews looks down as the water covers his shoe, 
               and scrambles back up the stairs.

                                                                    CUT TO:

               INT. BRIDE / CHARTROOM

               Andrews unrolls a big drawing of the ship across the chartroom 
               table. It is a side elevation, showing all the watertight 
               bulkheads. His hands are shaking. Murdoch and Ismay hover 
               behind Andrews and the Captain.

                                     ISMAY
                         When can we get underway, do you 
                         think?

               Smith glares at him and turns his attention to Andrews' 
               drawing. The builder points to it for emphasis as he talks.

                                     ANDREWS
                         Water 14 feet above the keel in ten 
                         minutes... in the forepeak... in all 
                         three holds... and in boiler room 
                         six.

                                     SMITH
                         That's right.

                                     ANDREWS
                         Five compartments. She can stay afloat 
                         with the first four compartments 
                         breached. But not five. Not five. As 
                         she goes down by the head the water 
                         will spill over the tops of the 
                         bulkheads... at E Deck... from one 
                         to the next... back and back. There's 
                         no stopping it.

                                     SMITH
                         The pumps --

                                     ANDREWS
                         The pumps buy you time... but minutes 
                         only. From this moment, no matter 
                         what we do, Titanic will founder.

                                     ISMAY
                         But this ship can't sink!

                                     ANDREWS
                         She is made of iron, sir. I assure 
                         you, she can. And she will. It is a 
                         mathematical certainty.

               Smith looks like he has been gutpunched.

                                     SMITH
                         How much time?

                                     ANDREWS
                         An hour, two at most.

               Ismay reels as his dream turns into his worst nightmare.

                                     SMITH
                         And how many aboard, Mr. Murdoch?

                                     MURDOCH
                         Two thousand two hundred souls aboard, 
                         sir.

               A long beat. Smith turns to his employer.

                                     SMITH
                         I believe you may get your headlines, 
                         Mr. Ismay.

                                                                    CUT TO:

               EXT. BOAT DECK

               Andrews is striding along the boat deck, as seamen and 
               officers scurry to uncover the boats. Steam is venting from 
               pipes on the funnels overhead, and the din is horrendous. 
               Speech is difficult adding to the crew's level of 
               disorganization. Andrews sees some men fumbling with the 
               mechanism of one of the Wellin davits and yells to them over 
               the roar of steam.

                                     ANDREWS
                         Turn to the right! Pull the falls 
                         taut before you unchock. Have you 
                         never had a boat drill?

                                     SEAMAN
                         No sir! Not with these new davits, 
                         sir.

               He looks around, disgusted as the crew fumble with the davits, 
               and the tackle for the "falls"... the ropes which are used 
               to lower the boats. A few passengers are coming out on deck, 
               hesitantly in the noise and bitter cold.

                                                                    CUT TO:

               INT. ROSE AND CAL'S SUITE

               From inside the sitting room they can hear knocking and voices 
               in the corridor.

                                     RUTH
                         I had better go dress.

               Ruth exits and Hockley crosses to Rose. He regards her coldly 
               for a moment, then SLAPS her across the face.

                                     CAL
                         It is a little slut, isn't it?

               To Rose the blow is inconsequential compared to the blow her 
               heart has been given. Cal grabs her shoulders roughly.

                                     CAL
                         Look at me, you little --

               There is a loud knock on the door and an urgent voice. The 
               door opens and their steward puts his head in.

                                     STEWARD BARNES
                         Sir, I've been told to ask you to 
                         please put on your lifebelt, and 
                         come up to the boat deck.

                                     CAL
                         Get out. We're busy.

               The steward persists, coming in to get the lifebelts down 
               from the top of a dresser.

                                     STEWARD
                         I'm sorry about the inconvenience, 
                         Mr. Hockley, but it's Captain's 
                         orders. Please dress warmly, it's 
                         quite cold tonight.
                              (he hands a lifebelt 
                              to Rose)
                         Not to worry, miss, I'm sure it's 
                         just a precaution.

                                     CAL
                         This is ridiculous.

               In the corridor outside the stewards are being so polite and 
               obsequious they are conveying no sense of danger whatsoever. 
               However, it's another story in...

                                                                    CUT TO:

               INT. STEERAGE BERTHING AFT

               BLACKNESS. Then BANG! The door is thrown open and the lights 
               snapped on by a steward. The Cartmell family rouses from a 
               sound sleep.

                                     STEWARD #2
                         Everybody up. Let's go. Put your 
                         lifebelts on.

               IN THE CORRIDOR OUTSIDE

               Another steward is going from door to door along the hall, 
               pouncing and yelling.

                                     STEWARD #2
                         Lifebelts on. Lifebelts on. Everybody 
                         up, come on. Lifebelts on...

               People come out of the doors behind the steward, perplexed. 
               In the foreground a SYRIAN WOMAN asks her husband what was 
               said. He shrugs.

                                                                    CUT TO:

               INT. WIRELESS ROOM

               ON PHILLIPS

               Looking shocked.

                                     PHILLIPS
                         CQD, sir?

                                     SMITH
                         That's right. The distress call. 
                         CQD. Tell whoever responds that we 
                         are going down by the head and need 
                         immediate assistance.

               Smith hurries out.

                                     PHILLIPS
                         Blimey.

                                     BRIDE
                         Maybe you ought to try that new 
                         distress call... S.O.S.
                              (grinning)
                         It may be our only chance to use it.

               Phillips laughs in spite of himself and starts sending 
               history's first S.O.S. Dit dit dit, da da da, dit dit dit... 
               over and over.

                                                                    CUT TO:

               EXT. BOAT DECK

               Thomas Andrews looks around in amazement. The deck is empty 
               except for the crew fumbling with the davits. He yells over 
               the roar of the steam to First Officer Murdoch.

                                     ANDREWS
                         Where are all the passengers?

                                     MURDOCH
                         They've all gone back inside. Too 
                         damn cold and noisy for them.

               Andrews feels like he is in a bad dream. He looks at his 
               pocketwatch and heads for the foyer entrance.

                                                                    CUT TO:

               INT. A-DECK FOYER

               A large number of First Class passengers have gathered near 
               the staircase. They are getting indignant about the confusion. 
               Molly Brown snags a passing YOUNG STEWARD.

                                     MOLLY
                         What's doing, sonny? You've got us 
                         all trussed up and now we're cooling 
                         our heels.

               The young steward backs away, actually stumbling on the 
               stairs.

                                     YOUNG STEWARD
                         Sorry, mum. Let me go and find out.

               The jumpy piano rhythm of "Alexander's Ragtime Band" comes 
               out of the first class lounge a few yards away. Band leader 
               WALLACE HARTLEY has assembled some of his men on Captain's 
               orders, to allay panic.

               Hockley's entourage comes up to the A-deck foyer. Cal is 
               carrying the lifebelts, almost as an afterthought. Rose is 
               like a sleepwalker.

                                     CAL
                         It's just the God damned English 
                         doing everything by the book.

                                     RUTH
                         There's no need for language, Mr. 
                         Hockley.
                              (to Trudy)
                         Go back and turn the heater on in my 
                         room, so it won't be too cold when 
                         we get back.

               Thomas Andrews enters, looking around the magnificent room, 
               which he knows is doomed. Rose, standing nearby, sees his 
               heartbroken expression. She walks over to him and Cal goes 
               after her.

                                     ROSE
                         I saw the iceberg, Mr. Andrews. And 
                         I see it in your eyes. Please tell 
                         me the truth.

                                     ANDREWS
                         The ship will sink.

                                     ROSE
                         You're certain?

                                     ANDREWS
                         Yes. In an hour or so... all this... 
                         will be at the bottom of the Atlantic.

                                     CAL
                         My God.

               Now it is Cal's turn to look stunned. The Titanic? Sinking?

                                     ANDREWS
                         Please tell only who you must, I 
                         don't want to be responsible for a 
                         panic. And get to a boat quickly. 
                         Don't wait. You remember what I told 
                         you about the boats?

                                     ROSE
                         Yes, I understand. Thank you.

               Andrews goes off, moving among the passengers and urging 
               them to put on their lifebelts and get to the boats.

                                                                    CUT TO:

               INT. MASTER AT ARMS OFFICE

               Lovejoy and the Master at Arms are handcuffing Jack to a 4" 
               WATER PIPE as a crewman rushes in anxiously and almost blurts 
               to the Master at Arms --

                                     CREWMAN
                         You're wanted by the Purser, sir. 
                         Urgently.

                                     LOVEJOY
                         Go on. I'll keep an eye on him.

               Lovejoy pulls a pearl handled Colt .45 automatic from under 
               his coat. The Master at Arms nods and tosses the handcuff 
               key to Lovejoy, then exits with the crewman. Lovejoy flips 
               the key in the air. Catches it.

                                                                    CUT TO:

               INT. BRIDGE

               Junior Wireless Operator Bride is relaying a message to 
               Captain Smith from the CUNARD LINER CARPATHIA.

                                     BRIDE
                         Carpathia says they're making 17 
                         knots, full steam for them, sir.

                                     SMITH
                         And she's the only one who's 
                         responding?

                                     BRIDE
                         The only one close, sir. She says 
                         they can be here in four hours.

                                     SMITH
                         Four hours!

               The enormity of it hits Smith like a sledgehammer blow.

                                     SMITH
                         Thank you, Bride.

               He turns as Bride exits, and looks out onto the blackness.

                                     SMITH
                              (to himself)
                         My God.

                                                                    CUT TO:

               EXT. BOAT DECK - NIGHT

               Lightoller has his boats swung out. He is standing amidst a 
               crowd of uncertain passengers in all states of dress and 
               undress. One first class woman is barefoot. Others are in 
               stockings. The maitre of the restaurant is in top hat and 
               overcoat. Others are still in evening dress, while some are 
               in bathrobes and kimonos. Women are wearing lifebelts over 
               velvet gowns, then topping it with sole stoles. Some brought 
               jewels, others books, even small dogs.

               Lightoller sees Smith walking stiffly toward him and quickly 
               goes to him. He yells into the Captain's ear, through cupped 
               hands, over the roar of the steam...

                                     LIGHTOLLER
                         Hadn't we better get the women and 
                         children into the boats, sir?

               Smith just nods, a bit abstractly. The fire has gone out of 
               him. Lightoller sees the awesome truth in Smith's face.

                                     LIGHTOLLER
                              (to the men)
                         Right! Start the loading. Women and 
                         children!

               The appalling din of escaping steam abruptly cuts off, leaving 
               a sudden unearthly silence in which Lightoller's voice echoes.

               ON WALLACE HARTLEY

               Raising his violin to play.

                                     HARTLEY
                         Number 26. Ready and --

               The band has reassembled just outside the First Class 
               Entrance, port side, near where Lightoller is calling for 
               the boats to be loaded. They strike up a waltz, lively and 
               elegant. The music wafts all over the ship.

                                     LIGHTOLLER
                         Ladies, please. Step into the boat.

               Finally one woman steps across the gap, into the boat, 
               terrified of the drop to the water far below.

                                     WOMAN IN CROWD
                         You watch. They'll put us off in 
                         these silly little boats to freeze, 
                         and we'll all be back on board by 
                         breakfast.

               Cal, Rose and Ruth come out of the doors near the band.

                                     RUTH
                         My brooch, I left my brooch. I must 
                         have it!

               She turns back to go to her room but Cal takes her by the 
               arm, refusing to let her go. The firmness of his hold 
               surprises her.

                                     CAL
                         Stay here, Ruth.

               Ruth sees his expression, and knows fear for the first time.

                                                                    CUT TO:

               INT. STEERAGE BERTHING AFT / CORRIDORS AND STAIRWELL

               It is chaos, with stewards pushing their way through narrow 
               corridors clogged with people carrying suitcases, duffel 
               bags, children. Some have lifebelts on, others don't.

                                     STEWARD #2
                              (to Steward #3)
                         I told the stupid sods no luggage. 
                         Aw, bloody hell!

               He throws up his hand at the sight of a family, loaded down 
               with cases and bags, completely blocking the corridor.

               Fabrizio and Tommy push past the stewards, going the other 
               way. They reach a huge crowd gathered at the bottom of the 
               MAIN 3RD CLASS STAIRWELL. Fabrizio spots Helga with the rest 
               of the Dahl family, standing patiently with suitcases in 
               hand. He reaches her and she grins, hugging him.

               Tommy pushes to where he can see what's holding up the group. 
               There is a steel gate across the top of the stairs, with 
               several stewards and seamen on the other side.

                                     STEWARD
                         Stay calm, please. It's not time to 
                         go up to the boats yet.

               Near Tommy, an IRISHWOMAN stands stoically with two small 
               children and their battered luggage.

                                     LITTLE BOY
                         What are we doing, mummy?

                                     WOMAN
                         We're just waiting, dear. When they 
                         finish putting First Class people in 
                         the boats, they'll be startin' with 
                         us, and we'll want to be all ready, 
                         won't we?

                                                                    CUT TO:

               EXT. STARBOARD SIDE

               Boat 7 is less than half full, with 28 aboard a boat made 
               for 65.

                                     FIRST OFFICER MURDOCH
                         Lower away! By the left and right 
                         together, steady lads!

               The boat lurches as the falls start to pay out through the 
               pulley blocks. The women gasp. The boat descends, swaying 
               and jerking, toward the water 60 feet below. The passengers 
               are terrified.

                                                                    CUT TO:

               EXT. / INT. TITANIC HULL AND MASTER AT ARMS OFFICE

               TRACKING along the rows of portholes angling down into the 
               water. Under the surface, they glow green.

               PUSHING IN on one porthole which is half submerged. Inside 
               we see Jack, looking apprehensively at the water rising up 
               the glass.

               INSIDE THE MASTER AT ARMS' OFFICE

               Jack sits chained to the waterpipe, next to the porthole. 
               Lovejoy sits on the edge of a desk. He puts a .45 bullet on 
               the desk and watches it roll across and fall off. He picks 
               up the bullet.

                                     LOVEJOY
                         You know... I believe this ship may 
                         sink.
                              (crosses to Jack)
                         I've been asked to give you this 
                         small token of our appreciation...

               He punches Jack hard in the stomach, knocking the wind out 
               of him.

                                     LOVEJOY
                         Compliments of Mr. Caledon Hockley.

               Lovejoy flips the handcuff key in the air, catches it and 
               puts it in his pocket. He exits. Jack is left gasping, 
               handcuffed to the pipe.

                                                                    CUT TO:

               EXT. BOAT DECK / STARBOARD SIDE, FORWARD

               At the stairwell rail on the bridge wing, Fourth Officer 
               Boxhall and Quartermaster Rowe light the first distress 
               rocket. It shoots into the sky and EXPLODES with a thunderclap 
               over the ship, sending out white starbursts which light up 
               the entire deck as they fall.

               WHIP PAN off the starbursts to Ismay. The Managing Director 
               of White Star Line is cracking. Already at the breaking point 
               from his immense guilt, the rocket panics him. He starts 
               shouting at the officers struggling with the falls of BOAT 
               5.

                                     ISMAY
                         There is no time to waste!
                              (yelling and waving 
                              his arms)
                         Lower away! Lower away! Lower away!

               FIFTH OFFICER LOWE, a baby-faced 28, and the youngest officer, 
               looks up from the tangled falls at the madman.

                                     LOWE
                         Get out of the way, you fool!

                                     ISMAY
                         Do you know who I am?

               Lowe, not having a clue nor caring, squares up to Ismay.

                                     LOWE
                         You're a passenger. And I'm a ship's 
                         bloody officer. Now do what you're 
                         told!
                              (turning away)
                         Steady men! Stand by the falls!

                                     ISMAY
                              (numbly, backing away)
                         Yes, quite right. Sorry.

                                                                    CUT TO:

               EXT. BOAT DECK / PORT SIDE

               SECOND OFFICER LIGHTOLLER is loading the boat nearest Cal 
               and Rose... Boat 6.

                                     LIGHTOLLER
                         Women and children only! Sorry sir, 
                         no men yet.

               Another rocket bursts overhead, lighting the crowd. Startled 
               faces turn upward. Fear now in the eyes.

               DANIEL MARVIN has his Biograph camera set up, cranking away... 
               hoping to get an exposure off the rocket's light. he has 
               Mary posed in front of the scene at the boats.

                                     MARVIN
                         You're afraid, darling. Scared to 
                         death. That's it!

               Either she suddenly learned to act or she is petrified.

               ROSE watches the farewells taking pace right in front of her 
               as they step closer to the boat. Husbands saying goodbye to 
               wives and children. Lovers and friends parted. Nearby MOLLY 
               is getting a reluctant woman to board the boat.

                                     MOLLY
                         Come on, you heard the man. Get in 
                         the boat, sister.

                                     RUTH
                         Will the lifeboats be seated according 
                         to class? I hope they're not too 
                         crowded --

                                     ROSE
                         Oh, Mother shut up!
                              (Ruth freezes, mouth 
                              open)
                         Don't you understand? The water is 
                         freezing and there aren't enough 
                         boats... not enough by half. Half 
                         the people on this ship are going to 
                         die.

                                     CAL
                         Not the better half.

               PUSH IN ON ROSE'S FACE as it hits her like a thunderbolt. 
               Jack is third class. He doesn't stand a chance. Another rocket 
               bursts overhead, bathing her face in white light.

                                     ROSE
                         You unimaginable bastard.

                                     MOLLY
                         Come on, Ruth, get in the boat. These 
                         are the first class seats right up 
                         here. That's it.

               Molly practically hands her over to Lightoller, then looks 
               around for some other women who might need a push.

                                     MOLLY
                         Come on, Rose. You're next, darlin'.

               Rose steps back, shaking her head.

                                     RUTH
                         Rose, get in the boat!

                                     ROSE
                         Goodbye, mother.

               Ruth, standing in the tippy lifeboat, can do nothing. Cal 
               grabs Rose's arm but she pulls free and walks away through 
               the crowd. Cal catches up to Rose and grabs her again, 
               roughly.

                                     CAL
                         Where are you going? To him? Is that 
                         it? To be a whore to that gutter 
                         rat?

                                     ROSE
                         I'd rather be his whore than your 
                         wife.

               He clenches his jaw and squeezes her arm viciously, pulling 
               her back toward the lifeboat. Rose pulls out a hairpin and 
               jabs him with it. He lets go with a curse and she runs into 
               the crowd.

                                     LIGHTOLLER
                         Lower away!!

                                     RUTH
                         Rose! ROSE!!

                                     MOLLY
                         Stuff a sock in it, would ya, Ruth. 
                         She'll be along.

               The boat lurches downward as the falls are paid out.

               TRACKING WITH ROSE, as she runs through the clusters of 
               people. She looks back and a furious Cal is coming after 
               her. She runs breathlessly up to two proper looking men.

                                     ROSE
                         That man tried to take advantage of 
                         me in the crowd!

               Appalled, they turn to see Cal running toward them. Rose 
               runs on as the two men grab Cal, restraining him. She runs 
               through the First Class entrance.

               Cal breaks free and runs after her. He reaches the entrance, 
               but runs into a knot of people coming out. He pushes rudely 
               through them...

                                                                    CUT TO:

               INT. BOAT DECK FOYER / STAIRCASE / A-DECK FOYER

               Cal runs in, and down to the landing, pushing past the 
               gentlemen and ladies who are filling up the stairs. He scans 
               the A-deck foyer. Rose is gone.

                                                                    CUT TO:

               EXT. OCEAN / TITANIC / BOAT

               The hull of Titanic looms over Boat 6 like a cliff. Its 
               enormous mass is suddenly threatening to those in the tiny 
               boat. Quartermaster Hitchins, at the tiller, wants nothing 
               but to get away from the ship. Unfortunately his two seamen 
               can't row. They flail like a duck with a broken wing.

                                     HITCHINS
                         Keep pulling... away from the ship. 
                         Pull.

                                     MOLLY
                         Ain't you boys ever rowed before? 
                         Here, gimme those oars. I'll show ya 
                         how it's done.

               She climbs over Ruth to get at the oars, stepping on her 
               feet.

               Around them the evacuation is in full swing, with boats in 
               the water, others being lowered.

                                                                    CUT TO:

               INT. MASTER AT ARMS OFFICE / CORRIDOR

               Jack pulls on the pipe with all his strength. It's not 
               budging. He hears gurgling sound. Water pours under the door, 
               spreading rapidly across the floor.

                                     JACK
                         Shit.

               He tries to pull one hand out of the cuffs, working until 
               the skin is raw... no good.

                                     JACK
                         Help!! Somebody!! Can anybody hear 
                         me?!
                              (to himself)
                         This could be bad.

               THE CORRIDOR

               Outside is deserted. Flooded a couple of inches deep. Jack's 
               voice comes faintly through the door, but there is no one to 
               hear it.

                                                                    CUT TO:

               INT. FIRST CLASS CORRIDOR

               Thomas Andrews is opening stateroom doors, checking that 
               people are out.

                                     ANDREWS
                         Anyone in here?

               Rose runs up to him, breathless.

                                     ROSE
                         Mr. Andrews, thank God! Where would 
                         the Master at Arms take someone under 
                         arrest?!

                                     ANDREWS
                         What? You have to get to a boat right 
                         away!

                                     ROSE
                         No! I'll do this with or without 
                         your help, sir. But without will 
                         take longer.

                                     ANDREWS
                              (beat)
                         Take the elevator to the very bottom, 
                         go left, down the crewman's passage, 
                         then make a right.

                                     ROSE
                         Bottom, left, right. I have it.

                                     ANDREWS
                         Hurry, Rose.

                                                                    CUT TO:

               INT. FOYER / ELEVATORS

               Rose runs up as the last Elevator Operator is closing up his 
               lift to leave.

                                     OPERATOR
                         Sorry, miss, lifts are closed --

               Without thinking she grabs him and shoves him back into the 
               lift.

                                     ROSE
                         I'm through with being polite, 
                         goddamnit!! I may never be polite 
                         the rest of my life! Now take me 
                         down!!

               The operator fumbles to close the gate and start the lift.

                                                                    CUT TO:

               EXT. OCEAN / BOAT

               Molly and the two seamen are rowing, and they've made it a 
               hundred feet or so. Enough to see that the ship is angled 
               down into the water, with the bow rail less than ten feet 
               above the surface.

                                     MOLLY
                         Come on girls, join in, it'll keep 
                         ya warm. Let's go Ruth. Grab an oar!

               Ruth just stares at the spectacle of the great liner, its 
               rows of lights blazing, slanting down into the sullen black 
               mirror of the Atlantic.

                                                                    CUT TO:

               INT. FIRST CLASS ELEVATOR / CORRIDORS

               Through the wrought iron door of the elevator car Rose can 
               see the decks going past. The lift slows. Suddenly ICE WATER 
               is swirling around her legs. She SCREAMS in surprise. So 
               does the operator.

               The car has landed in a foot of freezing water, shocking the 
               hell out of her. She claws the door open and splashes out, 
               hiking up her floor-length skirt so she can move. The lift 
               goes back up, behind her, as she looks around.

                                     ROSE
                         Left, crew passage.

               She spots it and slogs down the flooded corridor. The place 
               is understandably deserted. She is on her own.

                                     ROSE
                         Right, right... right.

               She turns into a cross-corridor, splashing down the hall. A 
               row of doors on each side.

                                     ROSE
                         Jack? Jaaacckk??

                                                                    CUT TO:

               INT. MASTER AT ARMS OFFICE / CORRIDOR

               Jack is hopelessly pulling on the pipe again, straining until 
               he turns red. He collapses back on the bench, realizing he's 
               screwed. Then he hears her through the door.

                                     JACK
                         ROSE!! In here!

               IN THE HALL

               Rose hears his voice behind her. She spins and runs back, 
               locating the right door, then pushes it open, creating a 
               small wave.

               She splashes over Jack and puts her arms around him.

                                     ROSE
                         Jack, Jack, Jack... I'm sorry, I'm 
                         so sorry.

               They are so happy to see each other it's embarrassing.

                                     JACK
                         That guy Lovejoy put it in my pocket.

                                     ROSE
                         I know, I know.

                                     JACK
                         See if you can find a key for these. 
                         Try those drawers. It's a little 
                         brass one.

               She kisses his face and hugs him again, then starts to go 
               through the desk.

                                     JACK
                         So... how did you find out I didn't 
                         do it?

                                     ROSE
                         I didn't.
                              (she looks at him)
                         I just realized I already knew.

               They share a look, then she goes back to ransacking the room, 
               searching drawers and cupboards. Jack sees movement out the 
               porthole and looks out.

               A LIFEBOAT hits the surface of the water, seen from below.

                                                                    CUT TO:

               EXT. TITANIC / BOAT ONE

               While the seamen detach the falls, Boat One rocks next to 
               the hull. Lucile and Sir Cosmo Duff-Gordon sit with ten others 
               in a boat made for four times that many.

                                     LUCILE
                         I despise small boats. I just know 
                         I'm going to be seasick. I always 
                         get seasick in small boats. Good 
                         Heavens, there's a man down there.

               In a lit porthole beneath the surface she sees Jack looking 
               up at her... a face in a bubble of light under the water.

                                                                    CUT TO:

               INT. MASTER AT ARMS OFFICE

               Rose stops trashing the room, and stands there, breathing 
               hard.

                                     ROSE
                         There's no key in here.

               They look around at the water, now almost two feet deep. 
               Jack has pulled his feet up onto the bench.

                                     JACK
                         You have to go for help.

                                     ROSE
                              (nodding)
                         I'll be right back.

                                     JACK
                         I'll wait here.

               She runs out, looking back at him once from the doorway, 
               then splashes away. Jack looks down at the swirling water.

                                                                    CUT TO:

               INT. STAIRWELL AND CORRIDORS

               Rose splashes down the hall to a stairwell going up to the 
               next deck. She climbs the stairs, her long skirt leaving a 
               trail like a giant snail. The weight of it is really slowing 
               her down. She rips at the buttons and shimmies quickly out 
               of the thing. She bounds up the stairs in her stockings and 
               knee-length slip, to find herself in --

               A LONG CORRIDOR

               Part of the labyrinth of steerage hallways forward. She is 
               alone here. A long groan of stressing metal echoes along the 
               hall as the ship continues to settle. She runs down the hall, 
               unimpeded now.

                                     ROSE
                         Hello? Somebody?!

               She turns a corner and runs along another corridor in a daze. 
               The hall slopes down into water which, shimmers, reflecting 
               the light. The margin of the water creeps toward her. A YOUNG 
               MAN appears, running through the water, sending up geysers 
               of spray. He pelts past her without slowing, his eyes 
               crazed...

                                     ROSE
                         Help me! We need help!

               He doesn't look back. It is like a bad dream. The hull gongs 
               with terrifying sounds.

               The lights flicker and go out, leaving utter darkness. A 
               beat. Then they come back on. She finds herself 
               hyperventilating. That one moment of blackness was the most 
               terrifying of her life.

               A STEWARD runs around the nearest corner, his arms full of 
               lifebelts. He is upset to see someone still in his section. 
               He grabs her forcefully by the arm, pulling her with him 
               like a wayward child.

                                     STEWARD
                         Come on, then, let's get you topside, 
                         miss, that's right.

                                     ROSE
                         Wait. Wait! I need your help! There's --

                                     STEWARD
                         No need for panic, miss. Come along!

                                     ROSE
                         No, let me go! You're going the wrong 
                         way!

               He's not listening. And he won't let her go.

               She SHOUTS in his ear, and when he turns, she punches him 
               squarely in the nose. Shocked, he lets her go and staggers 
               back.

                                     STEWARD
                         To Hell with you!

                                     ROSE
                         See you there, buster!

               The steward runs off, holding his bloody nose. She spits 
               after him. Just the way Jack taught her.

               She turns around, SEES: a glass case with a fire-axe in it. 
               She breaks the glass with a battered suitcase which is lying 
               discarded nearby, and seizes the axe, running back the way 
               she came.

               AT THE STAIRWELL

               She looks down and gasps. The water has flooded the bottom 
               five steps. She goes down and has to crouch to look along 
               the corridor to the room where Jack is trapped.

               Rose plunges into the water, which is up to her waist... and 
               powers forward, holding the axe above her head in two hands. 
               She grimaces at the pain from the literally freezing water.

                                                                    CUT TO:

               INT. MASTER AT ARMS OFFICE

               Jack has climbed up on the bench, and is hugging the 
               waterpipe. Rose wades in, holding the axe above her head.

                                     ROSE
                         Will this work?

                                     JACK
                         We'll find out.

               They are both terrified, but trying to keep panic at bay. He 
               positions the chain connecting the two cuffs, stretching it 
               taut across the steel pipe. The chain is of course very short, 
               and his exposed wrists are on either side of it.

                                     JACK
                         Try a couple practice swings.

               Rose hefts the axe and thunks it into a wooden cabinet.

                                     JACK
                         Now try to hit the same mark again.

               She swings hard and the blade thunks in four inches from the 
               mark.

                                     JACK
                         Okay, that's enough practice.

               He winces, bracing himself as she raises the axe. She has to 
               hit a target about an inch wide with all the force she can 
               muster, with his hands on either side.

                                     JACK
                              (sounding calm)
                         You can do it, Rose. Hit it as hard 
                         as you can, I trust you.

               Jack closes his eyes. So does she.

               The axe comes down. K-WHANG! Rose gingerly opens her eyes 
               looks... Jack is grinning with two separate cuffs.

               Rose drops the axe, all the strength going out of her.

                                     JACK
                         Nice work, there, Paul Bunyan.

               He climbs down into the water next to her. He can't breathe 
               for a second.

                                     JACK
                         Shit! Excuse my French. Ow ow ow, 
                         that is cold! Come on, let's go.

               They wade out into the hall. Rose starts toward the stairs 
               going up, but Jack stops her. There is only about a foot of 
               the stairwell opening visible.

                                     JACK
                         Too deep. We gotta find another way 
                         out.

                                                                    CUT TO:

               EXT. BOAT 6 AND TITANIC

               TIGHT ON THE LETTERS TITANIC painted two feet high on the 
               bow of the doomed steamer. Once 50 feet above the waterline, 
               they now quietly slip below the surface. We see them, gold 
               on black, rippling and dimming to a pale green as they go 
               deeper.

               IN BOAT SIX

               Ruth looks back at the Titanic, transfixed by the sight of 
               the dying liner. The bowsprit is now barely above the 
               waterline. Another of Boxhall's rockets EXPLODES overhead. K-
               BOOM! It lights up the whole area, and we see half a dozen 
               boats in the water, spreading out from the ship.

                                     MOLLY
                         Now there's somethin' you don't see 
                         every day.

                                                                    CUT TO:

               INT. SCOTLAND ROAD / E-DECK

               The widest passageway in the ship, it is used by crew and 
               steerage alike, and runs almost the length of the ship. Right 
               now steerage passengers move along it like refugees, heading 
               aft.

               CRASH! A wooden doorframe splinters and the door bursts open 
               under the force of Jack's shoulder. Jack and Rose stumble 
               through, into the corridor. A STEWARD, who was nearby herding 
               people along, marches over.

                                     STEWARD
                         Here you! You'll have to pay for 
                         that, you know. That's White Star 
                         Line property --

                                     JACK AND ROSE
                              (turning together)
                         Shut up!

               Jack leads her past the dumbfounded steward. They join the 
               steerage stragglers going aft. In places the corridor is 
               almost completely blocked by large families carrying all 
               their luggage.

               An IRISH WOMAN gives Rose a blanket, more for modesty than 
               because she is blue-lipped and shivering.

                                     IRISH WOMAN
                         Here, lass, cover yerself.

               Jack rubs her arms and tries to warm her up as they walk 
               along. The woman's husband offers them a flask of whiskey.

                                     IRISH MAN
                         This'll take the chill off.

               Rose takes a mighty belt and hands it to Jack. He grins and 
               follows suit. Jack tries a number of DOORS and IRON GATES 
               along the way, finding them all locked.

                                                                    CUT TO:

               EXT. BOAT DECK

               ON THE BOAT DECK

               The action has moved to the aft group of boats, numbers 9, 
               11, 13 and 15 on the starboard side, and 10, 12, 14 and 16 
               on the port side. The pace of work is more frantic. You see 
               crew and officers running now to work the davits, their 
               previous complacency gone.

               Cal pushes through the crowd, scanning for Rose. Around him 
               is chaos and confusion. A woman is calling for a child who 
               has become separated from the crowd. A man is shouting over 
               people's heads. A woman takes hold of Second Officer 
               Lightoller's arm as he is about to launch Boat 10.

                                     WOMAN
                         Will you hold the boat a moment? I 
                         have to run back to my room for 
                         something --

               Lightoller grabs her and shoves her bodily into the boat. 
               Thomas Andrews rushes up to him just then.

                                     ANDREWS
                         Why are the boats being launched 
                         half full?!

               Lightoller steps past him, helping a seaman clear a snarled 
               fall.

                                     LIGHTOLLER
                         Not now, Mr. Andrews.

                                     ANDREWS
                              (pointing down at the 
                              water)
                         There, look... twenty or so in a 
                         boat built for sixty five. And I saw 
                         one boat with only twelve. Twelve!

                                     LIGHTOLLER
                         Well... we were not sure of the weight --

                                     ANDREWS
                         Rubbish! They were tested in Belfast 
                         with the weight of 70 men. Now fill 
                         these boats, Mr. Lightoller. For 
                         God's sake, man!

               The shot HANDS OFF to Cal, who sees Lovejoy hurrying toward 
               him through the aisle connecting the port and starboard sides 
               of the boat deck.

                                     LOVEJOY
                         She's not on the starboard side 
                         either.

                                     CAL
                         We're running out of time. And this 
                         strutting martinet...
                              (indicating Lightoller)
                         ...isn't letting any men in at all.

                                     LOVEJOY
                         The one on the other side is letting 
                         men in.

                                     CAL
                         Then that's our play. But we're still 
                         going to need some insurance.
                              (he starts off forward)
                         Come on.

               Cal charges off, heading forward, followed by Lovejoy. The 
               SHOT HANDS OFF to a finely dressed elderly couple, IDA and 
               ISADOR STRAUSS.

                                     ISADOR
                         Please, Ida, get into the boat.

                                     IDA
                         No. We've been together for forty 
                         years, and where you go, I go. Don't 
                         argue with me, Isador, you know it 
                         does no good.

               He looks at her with sadness and great love. They embrace 
               gently.

                                     LIGHTOLLER
                         Lower away!!

                                                                    CUT TO:

               EXT. BRIDGE / FORWARD WELL DECK / FOC'SLE

               AT THE BOW

               The place where Jack and Rose first kissed... the bow railing 
               goes under water water. Water swirls around the captsans and 
               windlasses on the foc'sle deck.

               Smith strides to the bridge rail and looks down at the well 
               deck. Water is shipped over the sides and the well deck is 
               awash. Two men run across the deck, their feet sending up 
               spray. Behind Smith, Boxhall fires another rocket. WHOOSH!

                                                                    CUT TO:

               INT. E-DECK CORRIDORS AND STAIRWELL

               Fabrizio, standing with Helga Dahl and her family, hears 
               Jack's voice.

                                     JACK
                         Fabrizio! Fabri!

               Fabrizio turns and sees Jack and Rose pushing through the 
               crowd. He and Jack hug like brothers.

                                     FABRIZIO
                         The boats are all going.

                                     JACK
                         We gotta get up there or we're gonna 
                         be gargling saltwater. Where's Tommy?

               Fabrizio points over the heads of the solidly packed crowd 
               to the stairwell.

               Tommy has his hands on the bars of the steel gate which blocks 
               the head of the stairwell. The crew open the gate a foot or 
               so and a few women are squeezing through.

                                     STEWARD #2
                         Women only. No men. No men!!

               But some terrified men, not understanding English, try to 
               rush through the gap, forcing the gate open. The crewmen and 
               stewards push them back, shoving and punching them.

                                     STEWARD #2
                         Get back! Get back you lot!
                              (to the crewmen)
                         Lock it!!

               They struggle to get the gate closed again, while Steward #2 
               brandishes a small revolver. Another holds a fire axe. They 
               lock the gate, and a cry goes up among the crowd, who surge 
               forward, pounding against the steel and shouting in several 
               languages.

                                     TOMMY
                         For the love of God, man, there are 
                         children down here! Let us up, so we 
                         can have a chance!

               But the crewmen are scared now. They have let the situation 
               get out of hand, and now they have a mob. Tommy gives up and 
               pushes his way back through the crowd, going down the stairs. 
               He rejoins Jack, Rose and Fabrizio.

                                     TOMMY
                         It's hopeless that way.

                                     JACK
                         Well, whatever we're goin' to do, we 
                         better do it fast.

               Fabrizio turns to Helga, praying he can make himself 
               understood.

                                     FABRIZIO
                              (with a lot of hand 
                              gestures)
                         Everyone... all of you... come with 
                         me now. We go to the boats. We go to 
                         the boats. Capito? Come now!

               They can't understand what he's saying. They can see his 
               urgency, but OLUF DAHL, the patriarch of the family, shakes 
               his head. He will not panic, and will not let his family go 
               with this boy. Fabrizio turns to Helga.

                                     FABRIZIO
                         Helga... per favore... please... 
                         come with me, I am lucky. Is my 
                         destiny to go to America.

               She kisses him, then steps back to be with her family. Jack 
               lays a hand on his shoulder, his eyes saying "Let's go".

                                     FABRIZIO
                         I will never forget you.

               He turns to Jack, who leads the way out of the crowd. Looking 
               back Fabrizio sees her face disappear into the crowd.

                                                                    CUT TO:

               INT. CAL AND ROSE'S SUITE

               CLUNK! Cal opens his safe and reaches inside. As Lovejoy 
               watches, he pulls out two stacks of bills, still banded by 
               bank wrappers. Then he takes out "Heart of the Ocean", putting 
               it in the pocket of his overcoat, and locks the safe.

                                     CAL
                              (holding up stacks of 
                              bills)
                         I make my own luck.

                                     LOVEJOY
                              (putting the .45 in 
                              his waistband)
                         So do I.

               Cal grins, putting the money in his pocket as they go out.

                                                                    CUT TO:

               INT. STEERAGE, AFT

               Jack, Rose, Fabrizio and Tommy are lost, searching for a way 
               out. They push past confused passengers... past a mother 
               changing her baby's diaper on top of an upturned steamer 
               trunk... past a woman arguing heatedly with a man in Serbo-
               Croatian, a wailing child next to them... past a man kneeling 
               to console a woman who is just sitting on the floor, 
               sobbing... and past another man with an English/Arabic 
               dictionary, trying to figure out what the signs mean, while 
               his wife and children wait patiently.

               Jack et al come upon a narrow stairwell and they go up two 
               decks before they are stopped by a small group pressed up 
               against a steel gate. The steerage men are yelling at a scared 
               STEWARD.

                                     STEWARD
                         Go to the main stairwell, with 
                         everyone else. It'll all get sorted 
                         out there.

               Jack takes one look at this scene and finally just loses it.

                                     JACK
                         God damn it to Hell son of a bitch!!

               He grabs one end of a bench bolted to the floor on the 
               landing. He starts pulling on it, and Tommy and Fabrizio 
               pitch in until the bolts shear and it breaks free. Rose 
               figures out what they are doing and clears a path up the 
               stairs between the waiting people.

                                     ROSE
                         Move aside! Quickly, move aside!

               Jack and Tommy run up the steps with the bench and RAM IT 
               INTO THE GATE with all their strength. It rips loose from 
               its track and falls outward, narrowly missing the steward. 
               Led by Jack, the crowd surges though. Rose steps up to the 
               cowering steward and says in her most imperious tone:

                                     ROSE
                         If you have any intention of keeping 
                         your pathetic job with the White 
                         Star Line, I suggest you escort these 
                         good people to the boat deck... now.

               Class wins out. He nods dumbly motions form them to follow.

                                                                    CUT TO:

               EXT. BOAT 6 / TITANIC - NIGHT

               Ruth rows with Molly Brown, two other women and the 
               incompetent sailors. She rests on her oars, exhausted, and 
               looks back at the ship.

               It slants down into the water, still ablaze with light. 
               Nothing is above water forward of the bridge except for the 
               foremast. Another rocket goes off, lighting up the entire 
               area... there are a dozen boats moving outward from the ship.

               AT THE BOAT DECK RAIL

               Captain Smith is shouting to Boat 6 through a large metal 
               megaphone.

                                     SMITH
                         Come back! Come back to the ship!

               CHIEF OFFICER WILDE joins him, blowing his silver whistle.

               FROM BOAT 6

               The whistle comes shrilly across the water. Quartermaster 
               Hitchins grips the rudder in fear.

                                     HITCHINS
                         The suction will pull us right down 
                         if we don't keep going.

                                     MOLLY
                         We got room for lots more. I say we 
                         go back.

                                     HITCHINS
                         No! It's our lives now, not theirs. 
                         And I'm in charge of this boat! Now 
                         row!!

               CAPTAIN SMITH

               At the rail of the boat deck, lowers his megaphone slowly

                                     SMITH
                         The fools.

                                                                    CUT TO:

               INT. A-DECK FOYER

               As Cal and Lovejoy cross the foyer encounter Benjamin 
               Guggenheim and his valet, both dressed in white tie, tail-
               coats and top hats.

                                     CAL
                         Ben, what's the occasion?

                                     GUGGENHEIM
                         We have dressed in our best and are 
                         prepared to go down like gentlemen.

                                     CAL
                         That's admirable, Ben.
                              (walking on)
                         I'll sure and tell your wife... when 
                         I get to New York.

                                                                    CUT TO:

               INT. FIRST CLASS SMOKING ROOM

               There are still two cardgames in progress. The room is quiet 
               and civilized. A silver serving cart, holding a large humidor, 
               begins to roll slowly across the room. One of the cardplayers 
               takes a cigar from it as it rolls by.

                                     CARDPLAYER
                         It seems we've been dealt a bad hand 
                         this time.

                                                                    CUT TO:

               EXT. / INT. A-DECK PROMENADE

               Cal and Lovejoy are walking aft with a purposeful stride. 
               They pass CHIEF BAKER JOHGHIN, who is working up a sweat 
               tossing deck chairs over the rail. After they go by, Joughin 
               takes a break and pulls a bottle of scotch from a pocket, 
               opening it. He drains it, and tosses it over the side too, 
               then stands there a little unsteadily.

                                                                    CUT TO:

               EXT. BOAT DECK AND A-DECK, AFT

               PANIC IS SETTING IN around the remaining boats aft. The crowd 
               here is now a mix of all three classes. Officers repeatedly 
               warn men back from the boats. The crowd presses in closer.

               Seamen SCAROTT brandishes the tiller of boat 14 to discourage 
               a close press of men who look ready to rush the boat. Several 
               men break ranks and rush forward.

               Lightoller pulls out his Webley revolver and aims it at them.

                                     LIGHTOLLER
                         Get back! Keep order!

               The men back down. Fifth Officer Lowe standing in the boat, 
               yells to the crew.

                                     LOWE
                         Lower away left and right!

               Lightoller turns away from the crowd and, out of their sight, 
               breaks his pistol open. Letting out a long breath, he starts 
               to LOAD IT.

                                                                    CUT TO:

               EXT. BOAT DECK, STARBOARD SIDE, AFT

               Cal and Lovejoy arrive in time to see Murdoch lowering his 
               last boat.

                                     CAL
                         We're too late.

                                     LOVEJOY
                         There are still some boats forward. 
                         Stay with this one... Murdoch. He 
                         seems to be quite... practical.

               IN THE WATER BELOW

               There is another panic. Boat 13, already in the water but 
               still attached to its falls, is pushed aft by the discharge 
               water being pumped out of the ship. It winds up directly 
               under boat 15, which is coming down right on top of it.

               The passengers shout in panic to the crew above to stop 
               lowering. They are ignored. Some men put their hands up, 
               trying futilely to keep the 5 tons of boat 15 from crushing 
               them.

               Fred Barrett, the stoker, gets out his knife and leaps to 
               the after falls, climbing rudely over people. He cuts the 
               aft falls while another crewman cuts the forward lines. 13 
               drifts out from beneath 15 just seconds before it touches 
               the water with a slap.

               Cal, looking down from the rail hears GUNSHOTS --

                                                                    CUT TO:

               EXT. BOAT DECK / A-DECK, PORT, AFT

               Fifth Officer Lowe, in Boat 14 is firing his gun as a warning 
               to a bunch of men threatening to jump into the boat as it 
               passes the open promenade on A-Deck.

                                     LOWE
                         Stay back you lot!

               BLAM! BLAM!

                                                                    CUT TO:

               EXT. BOAT DECK, STARBOARD, AFT

               The shots echo away.

                                     CAL
                         It's starting to fall apart. We don't 
                         have much time.

               Cal sees three dogs run by, including the black French 
               bulldog. Someone has released the pets from the kennels.

               Cal sees Murdoch turn from the davits of boat 15 and start 
               walking toward the bow. He catches up and falls in beside 
               him.

                                     CAL
                         Mr. Murdoch, I'm a businessman, as 
                         you know, and I have a business 
                         proposition for you.

                                                                    CUT TO:

               EXT. BOAT DECK, PORT

               Jack, Rose et al burst out onto the boat deck from the crew 
               stairs just aft of the third funnel. They look at the empty 
               davits.

                                     ROSE
                         The boats are gone!

               She sees Colonel Gracie chugging forward along the deck, 
               escorting two first class ladies.

                                     ROSE
                         Colonel! Are there any boats left?

                                     GRACIE
                              (staring at her 
                              bedraggled state)
                         Yes, miss... there are still a couple 
                         of boats all the way forward. This 
                         way, I'll lead you!

               Jack grabs her hand and they sprint past Gracie, with Tommy 
               and Fabrizio close behind.

               ANGLE ON THE BAND

               Incredibly they are still playing. Jack, Rose and the others 
               run by.

                                     TOMMY
                         Music to drown by. Now I know I'm in 
                         First Class.

                                                                    CUT TO:

               EXT. BOAT DECK, STARBOARD, FORWARD

               Water pours like a spillway over the forward railing on B-
               Deck. CAMERA SWEEPS UP past A-Deck to the Boat Deck where 
               Murdoch and his team are loading Collapsible Car the forward-
               most davits.

               NOTE: There are four so-called collapsibles, or Engelhardts 
               boats, including two which are stored on the roof of the 
               officer's quarters.

               The crowd is sparse, with most people still aft. Cal slips 
               his hand out of the pocket of his overcoat and into the waist 
               pocket of Murdoch's greatcoat, leaving the stacks of bills 
               there.

                                     CAL
                         So we have an understanding then?

                                     MURDOCH
                              (nodding curtly)
                         As you've said.

               Cal, satisfied, steps back. He finds himself waiting next to 
               J. Bruce Ismay. Ismay does not meet his eyes, nor anyone's. 
               Lovejoy comes up to Cal at that moment.

                                     LOVEJOY
                         I've found her. She's just over on 
                         the port side. With him.

                                     MURDOCH
                         Women and children? Any more women 
                         and children?
                              (glancing at Cal)
                         Any one else, then?

               Cal looks longingly at his boat... his moment has arrived.

                                     CAL
                         God damn it to hell! Come on.

               He and Lovejoy head for the port side, taking a short-cut 
               through the bridge.

               Bruce Ismay, seeing his opportunity, steps quickly into 
               Collapsible C. He stares straight ahead, not meeting Murdoch's 
               eyes.

                                     MURDOCH
                              (staring at Ismay)
                         Take them down.

                                                                    CUT TO:

               EXT. BOAT DECK / PORT SIDE - NIGHT

               ON THE PORT SIDE

               Lightoller is getting people into Boat 2. He keeps his pistol 
               in his hand at this point. Twenty feet below them the sea is 
               pouring into the doors and windows of B-Deck staterooms. 
               They can hear the roar of water cascading into the ship.

                                     LIGHTOLLER
                         Women and children, please. Women 
                         and children only. Step back, sir.

               Even with Jack's arms wrapped around her, Rose is shivering 
               in the cold. Near her a WOMAN with TWO YOUNG DAUGHTERS looks 
               into the eyes of a HUSBAND she knows she may not see again

                                     HUSBAND
                         Goodbye for a little while... only 
                         for a little while.
                              (to his two little 
                              girls)
                         Go with mummy.

               The woman stumbles to the boat with the children, hiding her 
               tears from them. Beneath the false good cheer, the man is 
               choked with emotion.

                                     HUSBAND
                         Hold mummy's hand and be a good girl. 
                         That's right.

               Some of the women are stoic, others are overwhelmed by emotion 
               and have to be helped into the boats. A MAN scribbles a note 
               and hands it to a woman who is about to board.

                                     MAN
                         Please get this to my wife in 
                         DeMoines, Iowa.

               Jack looks at Tommy and Fabrizio.

                                     JACK
                         You better check out the other side.

               They nod and run off, searching for a way around the 
               deckhouse.

                                     ROSE
                         I'm not going without you.

                                     JACK
                         Get in the boat, Rose.

               Cal walks up just then.

                                     CAL
                         Yes. Get in the boat, Rose.

               She is shocked to see him. She steps instinctively to Jack. 
               Cal looks at her, standing there shivering in her wet slip 
               and stockings, a shocking display in 1912.

                                     CAL
                         My God, look at you.
                              (taking off his boat)
                         Here, put this on.

               She numbly shrugs into it. He is doing it for modesty, not 
               the cold.

                                     LIGHTOLLER
                         Quickly, ladies. Step into the boat. 
                         Hurry, please!

                                     JACK
                         Go on. I'll get the next one.

                                     ROSE
                         No. Not without you!

               She doesn't even care that Cal is standing right there. He 
               sees the emotion between Jack and Rose and his jaw clenches. 
               But then he leans close to her and says...

                                     CAL
                              (low)
                         There are boats on the other side 
                         that are allowing men in. Jack and I 
                         can get off safely. Both of us.

                                     JACK
                              (he smiles reassuringly)
                         I'll be alright. Hurry up so we can 
                         get going... we got our own boat to 
                         catch.

                                     CAL
                         Get in... hurry up, it's almost full.

               Lightoller grabs her arm and pulls her toward the boat. She 
               reaches out for Jack and her fingers brush his for a moment. 
               Then she finds herself stepping down into the boat. It's all 
               a rush and blur.

                                     LIGHTOLLER
                         Lower away!

               The two men watch at the rail as the boat begins to descend.

                                     CAL
                              (low)
                         You're a good liar.

                                     JACK
                         Almost as good as you.

                                     CAL
                         I always win, Jack. One way or 
                         another.
                              (looks at him, smiling)
                         Pity I didn't keep that drawing. 
                         It's going to be worth a lot more by 
                         morning.

               Jack knows he is screwed. He looks down at Rose, not wanting 
               to waste a second of his last view of her.

               ROSE'S PERCEPTION - IN SLOW MOTION

               The ropes going through the pulleys as the seamen start to 
               lower. All sound going away... Lightoller giving orders, his 
               lips moving... but Rose hears only the blood pounding in her 
               ears... this cannot be happening... a rocket bursts above in 
               slow-motion, outlining Jack in a halo of light... Rose's 
               hair blowing in slow motion as she gazes up at him, descending 
               away from him... she sees his hand trembling, the tears at 
               the corners of his eyes, and cannot believe the unbearable 
               pain she is feeling...

               Rose is still staring up, tears pouring down her face.

               SUDDENLY SHE IS MOVING. She lunges across the women next to 
               her. Reaches the gunwale, climbing it...

               Hurls herself out of the boat to the rail of the A-Deck 
               promenade, catching it, and scrambling over the rail. The 
               Boat 2 continues down. But Rose is back on Titanic.

                                     JACK
                         No Rose! NOOOO!!

               Jack spins from the rail, running for the nearest way down 
               to A-Deck.

               Hockley too has seen her jump. She is willing to die for 
               this man, this gutter scum. He is overwhelmed by a rage so 
               all consuming it eclipses all thought.

                                                                    CUT TO:

               INT. GRAND STAIRCASE

               TRACKING WITH JACK as he bangs through the doors to the foyer 
               and sprints down the stairs. He sees her coming into A-deck 
               foyer, running toward him, Cal's long coat flying out behind 
               her as she runs.

               They meet at the bottom of the stairs, and collide in an 
               embrace.

                                     JACK
                         Rose, Rose, you're so stupid, you're 
                         such an idiot --

               And all the while he's kissing her and holding her as tight 
               as he can.

                                     ROSE
                         You jump, I jump, right?

                                     JACK
                         Right.

               Hockley comes in and runs to the railing. Looking down he 
               sees them locked in their embrace. Lovejoy comes up behind 
               Cal and puts a restraining HAND on him, but Cal whips around, 
               grabbing the pistol from Lovejoy's waistband in one cobra-
               fast move.

               He RUNS along the rail and down the stairs. As he reaches 
               the landing above them he raises the gun. SCREAMING in rage, 
               he FIRES.

               The carved cherub at the foot of the center railing EXPLODES. 
               Jack pulls Rose toward the stairs going down to the next 
               deck. Cal fires again, running down the steps toward them. A 
               bullet blows a divet out of the oak panelling behind Jack's 
               head as he pulls Rose down the next flight of stairs.

               Hockley steps on the skittering head of the cherub statue 
               and goes sprawling. The gun clatters across the marble floor. 
               He gets up, and reeling drunkenly goes over to retrieve it.

                                                                    CUT TO:

               INT. D-DECK RECEPTION ROOM

               The bottom of the grand staircase is flooded several feet 
               deep. Jack and Rose come down the stairs two at a time and 
               run straight into the water, fording across the room to where 
               the floor slopes up, until they reach dry footing at the 
               entrance to the dining saloon.

               STEADICAM WITH HOCKLEY as he reels down the stairs in time 
               to see Jack and Rose splashing through the water toward the 
               dining saloon. He FIRES twice. Big gouts of spray near them, 
               but he's not a great shot.

               The water boils up around his feet and he retreats up the 
               stairs a couple of steps. Around him the woodwork groans and 
               creaks.

                                     CAL
                              (calling to them)
                         Enjoy your time together!!

               Lovejoy arrives next to him. Cal suddenly remembers something 
               and starts to laugh.

                                     LOVEJOY
                         What could possible be funny?

                                     CAL
                         I put the diamond in my coat pocket. 
                         And I put my coat... on her.

               He turns to Lovejoy with a sickly expression, his eyes 
               glittering.

                                     CAL
                         I give it to you... if you can get 
                         it.

               He hands Lovejoy the pistol and goes back up the stairs. 
               Lovejoy thinks about it... then slogs into the water. The 
               icewater is up to his waist as he crosses the pool into the 
               dining saloon.

                                                                    CUT TO:

               INT. DINING SALOON

               Lovejoy moves among the tables and ornate columns, 
               searching... listening... his eyes tracking rapidly. It is a 
               sea of tables, and they could be anywhere. A silver serving 
               trolley rolls downhill, bumping into tables and pillars.

               He glances behind him. The water is following him into the 
               room, advancing in a hundred foot wide tide. The reception 
               room is now a roiling lake, and the grand staircase is 
               submerged past the first landing. Monstrous groans echo 
               through the ship.

               ON JACK AND ROSE

               Crouched behind a table, somewhere in the middle. They see 
               the water advancing toward them, swirling over the floor. 
               They crawl ahead of it to the next row of tables.

                                     JACK
                              (whispering)
                         Stay here.

               He moves off as --

               Lovejoy moves over one row and looks along the tables. 
               Nothing.

               The ship GROANS and CREAKS. He moves another row.

               ANGLE ON A METAL CART

               Five feet tall and full of stacks of china dishes. It starts 
               to roll down the aisle between tables.

               ON ROSE

               As the cart rolls toward her. It hits a table and the stacks 
               of dishes topple out, EXPLODING across the floor and showering 
               her.

               She scrambles out of the way and --

               Lovejoy spins, seeing her. He moves rapidly toward her, 
               keeping the gun aimed --

               That's when Jack tackles him from the side. They slam together 
               into a table, crashing over it, and toppling to the floor. 
               They land in the water which is flowing rapidly between the 
               tables.

               Jack and Lovejoy grapple in the icy water. Jack jams his 
               knee down on Lovejoy's hand, breaking his grip on the pistol, 
               and kicks it away. Lovejoy scrambles up and lunges at him, 
               but Jack GUT PUCHES him right in the solar plexus, doubling 
               him over.

                                     JACK
                         Compliments of the Chippewa Falls 
                         Dawsons.

               He grabs Lovejoy and slams him into an ornate column. Lovejoy 
               drops to the floor with a splash, stunned.

                                     JACK
                         Let's go.

               Jack and Rose run aft... uphill... entering the galley. Behind 
               them the tables have become islands in a lake... and the far 
               end of the room is flooded up to the ceiling.

               Lovejoy gets up and looks around for his gun. He pulls it up 
               out of the water and wades after them.

                                                                    CUT TO:

               INT. GALLEY / STAIRWELL

               They run through the galley and Rose spots the stairs. She 
               starts up and Jack grabs her hand. He leads her DOWN.

               They crouch together on the landing as Lovejoy runs to the 
               stairs. Assuming they have gone up (who wouldn't?) he climbs 
               up them two at a time.

               They wait for the footstep to recede. A long CREAKING GROAN. 
               Then they hear it... a CRYING CHILD. Below them. They go 
               down a few steps to looks along the next deck.

                                                                    CUT TO:

               INT. E-DECK CORRIDORS

               The corridor is awash, about a foot deep. Standing against 
               the wall, about 50 feet away, is a little BOY, about 3. The 
               water swirls around his legs and he is wailing.

                                     ROSE
                         We can't leave him.

               Jack nods and they leave the promise of escape up the 
               stairwell to run to the child. Jack scoops up the kid and 
               they run back to the stairs but --

               A torrent of water comes pouring down the stairs like rapids. 
               In seconds it is too powerful for them to go against.

                                     JACK
                         Come on.

               Charging the other way down the flooding corridor, they blast 
               up spray with each footstep. At the end of the hall are heavy 
               double doors. As Jack approaches them he sees water spraying 
               through the gap between the doors right up to the ceiling. 
               The doors groan and start to crack under the tons of pressure.

                                     JACK
                         Back! Go back!!

               Rose pivots and runs back the way they came, taking a turn 
               into a cross-corridor. A MAN is coming the other way. He 
               sees the boy in Jack's arms and cries out, grabbing him away 
               from Jack. Starts cursing him in Russian. He runs on with 
               the boy --

                                     ROSE
                         No! Not that way! Come back!

               DOUBLE DOORS BLAST OPEN. A wall of water thunders into the 
               corridor. The father and child DISAPPEAR instantly.

               Jack and Rose run as a wave blasts around the corner, foaming 
               from floor to ceiling. It gains on them like a locomotive. 
               They make it to a stairway going up.

                                                                    CUT TO:

               INT. STAIRWELL

               Jack and Rose pound up the steps as white water swirls up 
               behind them. PULL BACK to reveal that a steel gate blocks 
               the top of the stairs. Jack SLAMS against the gate, gripping 
               the bars.

               A terrified steward standing guard on the landing above turns 
               to run at the sight of the water thundering up the stairs.

                                     JACK
                         Wait! Wait! Help us! Unlock the gate.

               The steward runs on. The water wells up around Jack and Rose, 
               pouring through the gate and slamming them against it. In 
               seconds it is up to their waist.

                                     ROSE
                         Help us! Please!

               The steward stops and looks back. He sees Jack and Rose at 
               the gate, their arms reaching through... sees the water 
               POURING through the gate onto the landing.

                                     STEWARD
                         Fucking 'ell!

               He runs back, slogging against the torrent. He pulls a key 
               ring from his belt and struggles to unlock the padlock as 
               the water fountains up around them.

               The lights short out and the landing is plunged into darkness.

               The water rises over the lock and he's doing it by feel.

                                     JACK
                         Come on! Come on!

               Jack and Rose are right up against the ceiling...

               Suddenly the gate gives and SWINGS OPEN. They are pushing 
               through by the force of the water. They make it to stairs on 
               the other side of the landing and follow the steward up to 
               the next deck.

                                                                    CUT TO:

               EXT. BOAT DECK, STARBOARD SIDE

               Cal comes reeling out of the first class entrance, looking 
               wild-eyed. The lurches down the deck toward the bridge. Waltz 
               music wafts over the ship. Somewhere the band is still 
               playing.

               CAL'S POV

               A little girl, maybe two years old, is crying along in the 
               alcove. She looks up at Cal beseechingly. Cal moves on without 
               a glance back... reaching a large crowd clustered around 
               COLLAPSIBLE A just aft of the bridge. He sees Murdoch and a 
               number of crewmen struggling to drag the boat to the davits, 
               with no luck.

               Cal pushes forward, trying to signal Murdoch, but the officer 
               ignores him. Nearby Tommy and Fabrizio are being pushed 
               forward by the crowd behind. PURSER MCELROY pushes them back, 
               getting a couple of seamen to help him. He brandishes his 
               gun, waving it in the air, yelling for the crowd to stay 
               back.

                                                                    CUT TO:

               EXT. BOAT DECK, PORT SIDE / ROOF OF OFFICERS' QUARTERS

               Lightoller, with a group of crew and passengers, is trying 
               to get Collapsible B down from the roof. They slide it down 
               a pair of oars leaned against the deck house.

                                     LIGHTOLLER
                         Hold it! Hold it!

               The weight of the boat snaps the oars and it crashes to the 
               deck, upside down. The two Swedish cousins, OLAUS and BJORN 
               GUNERSEN, jump back as the boat nearly hits them.

                                                                    CUT TO:

               INT. STAIRWELL

               Jack and Rose run up seemingly endless stairs as the ship 
               groans and torgues around them.

                                                                    CUT TO:

               EXT. BOAT DECK, STARBOARD SIDE

               Murdoch, at Collapsible A, is no longer in control. The crowd 
               is threatening to rush the boat. They push and jostle, yelling 
               and shouting at the officers. The pressure from behind pushes 
               them forward, and one guy falls off the edge of the deck 
               into the water less than ten feet below.

                                     TOMMY
                         Give us a chance to live, you limey 
                         bastards!

               Murdoch fires his Webley twice in the air, then point it at 
               the crowd.

                                     MURDOCH
                         I'll shoot any man who tries to get 
                         past me.

               Cal steps up to him.

                                     CAL
                         We had a deal, damn you.

               Murdoch pushes him back, pointing the pistol at Cal.

                                     MURDOCH
                         Get back!

               A man next to Tommy rushes forward, and Tommy is shoved from 
               behind. Murdoch SHOOTS the first man, and seeing Tommy coming 
               forward, puts a bullet into his chest.

               Tommy collapses, and Fabrizio grabs him, holding him in his 
               arms as his life flows out over the deck.

               Murdoch turns to his men and salutes smartly. Then he puts 
               the pistol to his temple and... BLAM! He drops like a puppet 
               with the strings cut and topples over the edge of the boat 
               deck into the water only a few feet below.

               Cal stares in horror at Murdoch's body bobbing in the black 
               water. The MONEY FLOATS out of the pocket of his greatcoat, 
               the bills spreading across the surface.

               The crew rush to get the last few women aboard the boat.

                                     PURSER MCELROY
                              (calling above the 
                              confusion)
                         Any more women or children?!

               THE CHILD

               Crying in the alcove. Cal scoops her up and runs forward, 
               cradling her in his arms.

                                     CAL
                              (forcing his way 
                              through the crowd)
                         Here's a child! I've got a child!
                              (to McElroy)
                         Please... I'm all she has in the 
                         world.

               McElroy nods curtly and pushes him into the boat. He spins 
               with his gun, brandishing it in the air to keep the other 
               men back. Cal gets into the boat, holding the little girl. 
               He takes a seat with the women.

                                     CAL
                         There, there.

                                                                    CUT TO:

               INT. FIRST CLASS SMOKE ROOM

               Thomas Andrews stands in front of the fireplace, staring at 
               the large painting above the mantle. The fire is still going 
               in the fireplace.

               The room is empty except for Andrews. An ashtray falls off 
               the table. Behind him Jack and Rose run into the room, out 
               of breath and soaked. They run through, toward the aft 
               revolving door... then Rose recognizes him. She sees that 
               his lifebelt is off, lying on a table.

                                     ROSE
                         Won't you even make a try for it, 
                         Mr. Andrews?

                                     ANDREWS
                              (a tear rolls down 
                              his cheek)
                         I'm sorry that I didn't build you a 
                         stronger ship, young Rose.

                                     JACK
                              (to her)
                         It's going fast... we've got to keep 
                         moving.

               Andrews picks up his lifebelt and hands it to her.

                                     ANDREWS
                         Good luck to you, Rose.

                                     ROSE
                              (hugging him)
                         And to you, Mr. Andrews.

               Jack pulls her away and they run through the revolving door.

                                                                    CUT TO:

               EXT. BOAT DECK AND VARIOUS LOCATIONS

               The band finishes the waltz. Wallace Hartley looks at the 
               orchestra members.

                                     HARTLEY
                         Right, that's it then.

               They leave him, walking forward along the deck. Hartley puts 
               his violin to his chin and bows the first notes of "Nearer 
               My God to Thee". One by one the band members turn, hearing 
               the lonely melody.

               Without a word they walk back and take their places. They 
               join in with Hartley, filling out the sound so that it reaches 
               all over the ship on this still night. The vocalist begins: 
               "If in my dreams I be, nearer my God to thee..."

               THE HYMN PLAYS OVER THE FOLLOWING SEQUENCE:

               A seaman pulls off his lifebelt and catches up to Captain 
               Smith as he walks to the bridge. He proffers it, but Smith 
               seems to stare through him. Without a word he turns and goes 
               onto the bridge. He enters the enclosed WHEELHOUSE and closes 
               the door. He is alone, surrounded by the gleaming brass 
               instruments. He seems to inwardly collapse.

               IN THE FIRST CLASS SMOKING ROOM

               Andrews stands like a statue. He pulls out his pocketwatch 
               and checks the time. Then he opens the face of the mantle 
               clock and adjusts it to the correct time: 2:12 a.m. Everything 
               must be correct.

               IN CAL'S PARLOUR SUITE

               Water swirls in from the private promenade deck. Rose's 
               paintings are submerged. The Picasso transforms under the 
               water's surface. Degas' colors run. Monet's water lilies 
               come to life.

               DOWN ANGLE

               On the two figures lying side by side, fully clothed, on a 
               bed in a FIRST CLASS CABIN. Elderly Ida and Isador Strauss 
               stare at the ceiling, holding hands like young lovers. Water 
               pours into the room through a doorway. It swirls around the 
               bed, two feet deep rising fast.

               IN A STEERAGE CABIN

               Somewhere in the bowels of the ship, the young IRISH MOTHER, 
               seen earlier stoically waiting at the stairs, is tucking her 
               two young children into bed. She pulls up the covers, making 
               sure they are all warm and cozy. She lies down with them on 
               the bed, speaking soothingly and holding them.

                                                                    CUT TO:

               EXT. BOAT DECK / BRIDGE

               IN A WIDE SHOT we see a wave travel up the boat deck as the 
               bridge house sinks into the water.

               ON THE PORT SIDE

               Collapsible B is picked up by water. Working frantically, 
               the men try to detach it from the falls so the ship won't 
               drag it under. Colonel Gracie hands Lightoller a pocket knife 
               and he saws furiously at the ropes as the water swirls around 
               his legs. The boat, still upside down, is swept off the ship. 
               Men start diving in, swimming to stay with it.

               IN COLLAPSIBLE A

               Cal sits next to the wailing child, whom he has completely 
               forgotten. He watches the water rising around the men as 
               they work, scrambling to get the ropes cut so the ship won't 
               drag the collapsible under.

               Fabrizio removes the lifebelt from Tommy's body and struggles 
               to put it on as the water rises around him.

               CAPTAIN SMITH

               Standing near the wheel, watches the black water climbing 
               the windows of the enclosed wheelhouse. He has the stricken 
               expression of a damned soul on Judgment Day. The windows 
               burst suddenly and a wall of water edged with shards of glass 
               slams into Smith. He disappears in a vortex of foam.

               Collapsible A is hit by a wave as the bow plunges suddenly. 
               It partially swamps the boat, washing it along the deck. 
               Over a hundred passengers are plunged into the freezing water 
               and the area around the boat becomes a frenzy of splashing, 
               screaming people.

               As men are trying to climb into the collapsible, Cal grabs 
               an oar and pushes them back into the water.

                                     CAL
                         Get back! You'll swamp us!

               Fabrizio, swimming for his life, gets swirled under a davit. 
               The ropes and pulleys tangle around him as the davit goes 
               under the water, and he is dragged down. Underwater he 
               struggles to free himself, and then kicks back to the surface. 
               He surfaces, gasping for air in the freezing water.

               WALLACE HARTLEY

               Sees the water rolling rapidly up the deck toward them. He 
               holds the last note of the hymn in a sustain, and then lowers 
               his violin.

                                     HARTLEY
                         Gentlemen, it has been a privilege 
                         playing with you tonight.

                                                                    CUT TO:

               EXT. A-DECK AFT, PORT SIDE

               Jack and Rose run out of the PALM COURT into a dense crowd. 
               Jack pushes his way to the rail and looks at the state of 
               the ship. The bridge is under water and there is chaos on 
               deck. Jack helps her put her lifebelt on. People stream around 
               them, shouting and pushing.

                                     JACK
                         Okay... we keep moving aft. We have 
                         to stay on the ship as long as 
                         possible.

               They push their way aft through the panicking crowd.

                                                                    CUT TO:

               EXT. FORWARD FUNNEL

               Collapsible A is whirled like a leaf in the currents around 
               the sinking ship. It slams against the side of the forward 
               funnel.

                                     CAL
                              (to the crew in the 
                              boat)
                         Row! Row you bastards!!

               NEARBY

               Fabrizio is drawn up against the grating of a STOKEHOLD VENT 
               as water pours through it. The force of tons of water roaring 
               down the ship traps him against it, and he is dragged down 
               under the surface as the ship sinks. He struggles to free 
               himself but cannot.

               Suddenly there is a concussion deep in the bowels of the 
               ship as a furnace explodes and a blast of hot air belches 
               out of the ventilator, ejecting Fabrizio. He surfaces in a 
               roar of foam and keeps swimming.

                                                                    CUT TO:

               EXT. A-DECK / B-DECK / WELL DECK, AFT

               Jack and Rose clamber over the A-Deck aft rail. Then, using 
               all his strength, he lowers her toward the deck below, holding 
               on with one hand. She dangles, then falls. Jack jumps down 
               behind her.

               They join a crush of people literally clawing and scrambling 
               over each other to get down the narrow stairs to the well 
               deck... the only way aft.

               Seeing that the stairs are impossible, Jack climbs over the 
               B-Deck railing and helps Rose over. He lowers her again, and 
               she falls in a heap. Baker Joughin, now three sheets to the 
               wind, happens to be next to her. He hauls Rose to her feet. 
               Jack drops down and the three of them push through the crowd 
               across the well deck. Near them, at the rail, people are 
               jumping into the water.

               The ship GROANS and SHUDDERS. The man ahead of Jack is walking 
               like a zombie.

                                     MAN
                         Yeah, though I walk through the valley 
                         of the shadow of death --

                                     JACK
                         You wanna walk a little faster through 
                         that valley, fella?

                                                                    CUT TO:

               EXT. FORWARD FUNNEL

               The stay cables along the top of the funnel snap, and they 
               lash like steel whips down into the water. Cal watches as 
               the funnel topples from its mounts. Falling like a temple 
               pillar twenty eight feet across it whomps into the water 
               with a tremendous splash. People swimming underneath it 
               disappear in an instant.

               Fabrizio, a few feet away, is hurled back by a huge wave. He 
               comes up, gasping... still swimming. The water pouring into 
               the open end of the funnel draws in several swimmers. The 
               funnel sinks, disappearing, but --

               Hundreds of tons of water pour down through the 30 foot hole 
               where the funnel stood, thundering down into the belly of 
               the ship. A whirlpool forms, a hole in the ocean, like at 
               enormous toilet-flush. T. W. McCauley, the gym instructor 
               swims in a frenzy as the vortex draws him in. He is sucked 
               down like a spider going down a drain.

               Fabrizio, nearby, swims like Hell as more people are sucked 
               down behind him. He manages to get clear. He's going to live 
               no matter what it takes.

                                                                    CUT TO:

               INT. BOAT DECK FOYER / GRAND STAIRCASE

               Water roars through the doors and windows, cascading down 
               the stairs like a rapids. John Jacob Astor is swept down the 
               marble steps to A-Deck, which is already flooded... a roiling 
               vortex. He grabs the headless cherub at the bottom of the 
               staircase and wraps his arms around it.

               Astor looks up in time to see the 30 foot glass dome overhead 
               EXPLODE INWARD with the wave of water washing over it. A 
               Niagara of sea water thunders down into the room, blasting 
               through the first class opulence. It is the Armageddon of 
               elegance.

                                                                    CUT TO:

               INT. BELOW DECKS

               The flooding is horrific. Walls and doors are splintered 
               like kindling. Water roars down corridors with pile-driver 
               force.

               The CARTMELL FAMILY is at the top of a stairwell, jammed 
               against a locked gate like Jack and Rose were. Water boils 
               up the stairwell behind them. Bert Cartmell shakes the gate 
               futilely, shouting for help. Little Cora wails as the water 
               boils up around them all.

                                                                    CUT TO:

               EXT. STERN

               Rose and Jack struggle to climb the well deck stairs as the 
               ship tilts. Drunk Baker Joughin puts a hand squarely on Rose's 
               butt and shoves her up onto the deck.

                                     JOUGHIN
                         Sorry, miss!

               Hundreds of people are already on the poop deck, and more 
               are pouring up every second. Jack and Rose cling together as 
               they struggle across the tilting deck.

               As the bow goes down, the STERN RISES. IN BOAT 2, which is 
               just off the stern, passengers gape as the giant bronze 
               propellers rise out of the water like gods of the deep, 
               FILLING FRAME behind them.

               People are JUMPING from the well deck, the poop deck, the 
               gangway doors. Some hit debris in the water and are hurt or 
               killed.

               EXT. STERN

               ON THE POOP DECK

               Jack and Rose struggle aft as the angle increases. Hundreds 
               of passengers, clinging to every fixed object on deck, huddle 
               on their knees around FATHER BYLES, who has his voice raised 
               in prayer. They are praying, sobbing, or just staring at 
               nothing, their minds blank with dread.

               Pulling himself from handhold to handhold, Jack tugs Rose 
               aft along the deck.

                                     JACK
                         Come on, Rose. We can't expect God 
                         to do all the work for us.

               They struggle on, pushing through the praying people. A MAN 
               loses his footing ahead and slides toward them. Jack helps 
               him.

               THE PROPELLERS

               Are twenty feet above the water and rising faster.

               JACK AND ROSE

               Make it to the stern rail, right at the base of the flagpole. 
               They grip the rail, jammed in between other people. It is 
               the spot where Jack pulled her back onto the ship, just two 
               night... and a lifetime... ago.

               Above the wailing and sobbing, Father Byles' voice carries, 
               cracking with emotion.

                                     FATHER BYLES
                         ...and I saw new heavens and a new 
                         earth. The former heavens and the 
                         former earth had passed away and the 
                         sea was no longer.

               The lights flicker, threatening to go out. Rose grips Jack 
               as the stern rises into a night sky ablaze with stars.

                                     FATHER BYLES
                         I also saw a new Jerusalem, the holy 
                         city coming down out of heaven from 
                         God, beautiful as a bride prepared 
                         to meet her husband. I heard a loud 
                         voice from the throne ring out this 
                         is God's dwelling among men. He shall 
                         dwell with them and they shall be 
                         his people and He shall be their God 
                         who is always with them.

               Rose stares about her at the faces of the doomed. Near them 
               are the DAHL FAMILY, clinging together stoically. Helga looks 
               at her briefly, and her eyes are infinitely sad.

               Rose sees a young mother next to her, clutching her five 
               year old son, who is crying in terror.

                                     MOTHER
                         Shhh. Don't cry. It'll be over soon, 
                         darling. It'll all be over soon.

                                     FATHER BYLES
                         He shall wipe every tear from their 
                         eyes. And there shall be no more 
                         death or mourning, crying out or 
                         pain, for the former world has passed 
                         away.

                                                                    CUT TO:

               INT. SHIP - VARIOUS

               As the ship tilts further everything not bolted down inside 
               shifts.

               CUPBOARDS

               Burst open in the pantry showering the floor with tons of 
               china. A PIANO slides across the floor, crashing into a wall. 
               FURNITURE tumbles across the Smoking Room floor.

               ON THE A-DECK PROMENADE

               Passengers lose their grip and slide down the wooden deck 
               like a bobsled run, hundreds of feet before they hit the 
               water. TRUDY BOLT, Rose's maid, slips as she struggles along 
               the railing and slides away screaming.

               AT THE STERN

               The propellers are 100 feet out of the water and rising. 
               Panicking people leap from the poop deck rail, fall screaming 
               and hit the water like mortar rounds. A man falls from the 
               poop deck, hitting the bronze hub of the starboard propeller 
               with a sickening smack.

               SWIMMERS LOOK UP

               And see the stern towering over them like a monolith, the 
               propellers rising against the stars. 110 feet. 120.

               AT THE STERN RAIL

               A man jumps. IN HIS POV we fall seemingly forever, right 
               past one of the giant screws. The water rushes up --

                                                                    CUT TO:

               EXT. TITANIC / BOAT

               TRACKING SLOWLY IN on Ruth as the sounds of the dying ship 
               and the screaming people come across the water.

               REVERSE / HER POV

               IN A WIDE SHOT we see the spectacle of the Titanic, her lights 
               blazing, reflecting in the still water. Its stern is high in 
               the air, angles up over forty five degrees. The propellers 
               are 150 feet out of the water. Over a thousand passengers 
               cling to the decks, looking from a distance like a swarm of 
               bees.

               The image is shocking, unbelievable, unthinkable. Ruth stares 
               at the spectacle, unable to frame it or put it into any 
               proportion.

                                     MOLLY BROWN
                         God Almighty.

               The great liner's lights flicker.

                                                                    CUT TO:

               INT. ENGINE ROOM

               In darkness Chief Engineer Bell hangs onto a pipe at the 
               master breaker panel. Around him men climb through tilted 
               cyclopean machines with electric hand-torches. It is a black 
               hell of breaking pipes, spraying water, and groaning machinery 
               threatening to tear right out of its bedplates.

               Water sprays down, hitting the breaker panel, but Bell will 
               not leave his post. CLUNK. The breakers kick. He slams them 
               in again and -- WHOOM! a blast of light! Something melts and 
               arcing fills the engine room with nightmarish light --

                                                                    CUT TO:

               EXT. TITANIC

               WIDE SHOT

               The lights go out all over the ship. Titanic becomes a vast 
               black silhouette against the stars.

               IN COLLAPSIBLE C

               Bruce Ismay has his back to the ship, unable to watch the 
               great steamer die. He is catatonic with remorse, his mind 
               overloaded. He can avert his eyes, but he can't block out 
               the sounds of dying people and machinery.

               A loud CRACKING REPORT comes across the water.

                                                                    CUT TO:

               EXT. BOAT DECK

               Near the third funnel a man clutches the ship's rail. He 
               stares down as the DECK SPLITS right between his feet. A 
               yawning chasm opens with a THUNDER of breaking steel Lovejoy 
               is clutching the railing on the roof of the Officers' Mess. 
               He watches in horror as the ship's structure RIPS APART right 
               in front of him. He gapes down into a widening maw, seeing 
               straight down into the bowels of the ship, amid a BOOMING 
               CONCUSSION like the sound of artillery. People falling into 
               the widening crevasse look like dolls.

               The stay cables on the funnel part and snap across the decks 
               like whips, ripping off davits and ventilators. A man is hit 
               by a whipping cable and snatched OUT OF FRAME. Another cable 
               smashes the rail next to Lovejoy and it rips free. He falls 
               backward into the pit of jagged metal.

               Fires, explosions and sparks light the yawning chasm as the 
               hull splits down through nine decks to the keel. The sea 
               pours into the gaping wound --

                                                                    CUT TO:

               INT. ENGINE ROOM

               It is a thundering black hell. Men scream as monstrous 
               machinery comes apart around them, steel frames twisting 
               like taffy. Their torches illuminate the roaring, foaming 
               demon of water as it races at the through the machines. Trying 
               to climb they are overtaken in seconds.

                                                                    CUT TO:

               EXT. TITANIC - NIGHT

               The STERN HALF of the ship, almost four hundred feet long, 
               falls back toward the water. On the poop deck everyone screams 
               as they feel themselves plummeting. The sound goes up like 
               the roar of fans at a baseball stadium when a run is scored.

               Swimming in the water directly under the stern a few 
               unfortunates shriek as they see the keel coming down on them 
               like God's bootheel. The massive stern section falls back 
               almost level, thundering down into the sea and pushing out a 
               mighty wave of displaced water.

               Jack and Rose struggle to hold onto the stern rail. They 
               feel the ship seemingly RIGHT ITSELF. Some of those praying 
               think it is salvation.

                                     SEVERAL PEOPLE
                         We're saved!

               Jack looks at Rose and shakes his head, grimly.

               Now the horrible mechanics play out. Pulled down by the 
               awesome weight of the flooded bow, the buoyant stern tilts 
               up rapidly. They feel the RUSH OF ASCENT as the fantail angles 
               up again. Everyone is clinging to benches, railings, 
               ventilators... anything to keep from sliding as the stern 
               lifts.

               The stern goes up and up, past 45 degrees, then past sixty.

               People start to fall, sliding and tumbling. They skid down 
               the deck, screaming and flailing to grab onto something. 
               They wrench other people loose and pull them down as well. 
               There is a pile-up of bodies at the forward rail. The DAHL 
               FAMILY falls one by one.

                                     JACK
                         We have to move!

               He climbs over the stern rail and reaches back for Rose. She 
               is terrified to move. He grabs her hand.

                                     JACK
                         Come on! I've got you!

               Jack pulls her over the rail. It is the same place he pulled 
               her over the rail two nights earlier, going the other 
               direction. She gets over just as the railing is going 
               HORIZONTAL, and the deck VERITCAL. Jack grips her fiercely.

               The stern is now straight up in the air... a rumbling black 
               monolith standing against the stars. It hangs there like 
               that for a long grace note, its buoyancy stable.

               Rose lies on the railing, looking down fifteen stories to 
               the boiling sea at the base of the stern section. People 
               near them, who didn't climb over, hang from the railing, 
               their legs dangling over the long drop. They fall one by 
               one, plummeting down the vertical face of the poop deck. 
               Some of them bounce horribly off deck benches and ventilators.

               Jack and Rose lie side by side on what was the vertical face 
               of the hull, gripping the railing, which is now horizontal. 
               Just beneath their feet are the gold letters "TITANIC" 
               emblazoned across the stern.

               Rose stares down terrified at the black ocean waiting below 
               to claim them. Jack looks to his left and sees Baker Joughin, 
               crouching on the hull, holding onto the railing. It is a 
               surreal moment.

                                     JOUGHIN
                              (nodding a greeting)
                         Helluva night.

               The final relentless plunge begins as the stern section 
               floods. Looking down a hundred feet to the water, we drop 
               like an elevator with Jack and Rose.

                                     JACK
                              (talking fast)
                         Take a deep breath and hold it right 
                         before we go into the water. The 
                         ship will suck us down. Kick for the 
                         surface and keep kicking. Don't let 
                         go of my hand. We're gonna make it 
                         Rose. Trust me.

               She stares at the water coming up at them, and grips his 
               hand harder.

                                     ROSE
                         I trust you.

               Below them the poop deck is disappearing. The plunge gathers 
               speed... the boiling surface engulfs the docking bridge and 
               then rushes up the last thirty feet.

               IN A HIGH SHOT

               We see the stern descend into the boiling sea. The name 
               "TITANIC" disappears, and the tiny figures of Jack and Rose 
               vanish under the water.

               Where the ship stood, now there is nothing. Only the black 
               ocean.

                                                                    CUT TO:

               EXT. OCEAN / UNDERWATER AND SURFACE

               Bodies are whirled and spun, some limp as dolls, others 
               struggling spasmodically, as the vortex sucks them down and 
               tumbles them.

               Jack rises INTO FRAME F.G. kicking hard for the surface... 
               holding tightly to Rose, pulling her up.

               AT THE SURFACE

               A roiling chaos of screaming, thrashing people. Over a 
               thousand people are now floating where the ship went down. 
               Some are stunned, gasping for breath. Others are crying, 
               praying, moaning, shouting... screaming.

               Jack and Rose surface among them. They barely have time to 
               gasp for air before people are clawing at them. People driven 
               insane by the water, 4 degrees below freezing, a cold so 
               intense it is indistinguishable form death by fire.

               A man pushes Rose under, trying to climb on top of her... 
               senselessly trying to get out of the water, to climb onto 
               anything. Jack PUNCHES him repeatedly, pulling her free.

                                     JACK
                         Swim, Rose! SWIM!

               She tries, but her strokes are not as effective as his because 
               of her life jacket. They break out of the clot of people. He 
               has to find some kind of flotation, anything to get her out 
               of the freezing water.

                                     JACK
                         Keep swimming. Keep moving. Come on, 
                         you can do it.

               All about them there is a tremendous wailing, screaming and 
               moaning... a chorus of tormented souls. And beyond that... 
               nothing but black water stretching to the horizon. The sense 
               of isolation and hopelessness is overwhelming.

                                                                    CUT TO:

               EXT. OCEAN

               Jack strokes rhythmically, the effort keeping him from 
               freezing.

                                     JACK
                         Look for something floating. Some 
                         debris... wood... anything.

                                     ROSE
                         It's so cold.

                                     JACK
                         I know. I know. Help me, here. Look 
                         around.

               His words keep her focused, taking her mind off the wailing 
               around them. Rose scans the water, panting, barely able to 
               draw a breath. She turns and... SCREAMS.

               A DEVIL is right in from of her face. It is the black FRENCH 
               BULLDOG, swimming right at her like a seamonster in the 
               darkness, its coal eyes bugging. It motors past her, like it 
               is headed for Newfoundland.

               Beyond it Rose sees something in the water.

                                     ROSE
                         What's that?

               Jack sees what she is pointing to, and they make for it 
               together. It is a piece of wooden debris, intricately carved. 
               He pushes her up and she slithers onto it belly down.

               But when Jack tries to get up onto the thing, it tilts and 
               submerges, almost dumping Rose off. It is clearly only big 
               enough to support her. He clings to it, close to her, keeping 
               his upper body out of the water as best he can.

               Their breath floats around them in a cloud as they pant from 
               exertion. A MAN swims toward them, homing in on the piece of 
               debris. Jack warns him back.

                                     JACK
                         It's just enough for this lady... 
                         you'll push it under.

                                     MAN
                         Let me try at least, or I'll die 
                         soon.

                                     JACK
                         You'll die quicker if you come any 
                         closer.

                                     MAN
                         Yes, I see. Good luck to you then.
                              (swimming off)
                         God bless.

                                                                    CUT TO:

               EXT. COLLAPSIBLE A / OCEAN

               The boat is overloaded and half-flooded. Men cling to the 
               sides in the water. Others, swimming, are drawn to it as 
               their only hope. Cal, standing in the boat, slaps his oar in 
               the water as a warning.

                                     CAL
                         Stay back! Keep off!

               Fabrizio, exhausted and near the limit, makes it almost to 
               the boat. Cal CLUBS HIM with the oar, cutting open his scalp.

                                     FABRIZIO
                         You don't... understand... I have... 
                         to get... to America.

                                     CAL
                              (pointing with the 
                              oar)
                         It's that way!

               CLOSE ON FABRIZIO

               As he floats, panting each breath agony. You see the spirit 
               leave him.

               FABRIZIO'S POV

               Cal in SLOW MOTION, yelling and wielding the oar. A demon in 
               a tuxedo. The image fades to black.

                                                                    CUT TO:

               EXT. OCEAN

               JACK AND ROSE

               Still float amid a chorus of the damned. Jack sees the ship's 
               officer nearby, CHIEF OFFICER WILDE. He is blowing his whistle 
               furiously, knowing the sound will carry over the water for 
               miles.

                                     JACK
                         The boats will come back for us, 
                         Rose. Hold on just a little longer. 
                         They had to row away for the suction 
                         and now they'll be coming back.

               She nods, his words helping her. She is shivering 
               uncontrollably, her lips blue and her teeth chattering.

                                     ROSE
                         Thank God for you Jack.

               People are still screaming, calling to the lifeboats.

                                     WOMAN
                         Come back! Please! We know you can 
                         hear us. For God's sake!

                                     MAN
                         Please... help us. Save one life! 
                         SAVE ONE LIFE!

                                                                    CUT TO:

               EXT. LIFEBOATS / OCEAN

               IN BOAT 6

               Ruth has her ears covered against the wailing in the darkness. 
               The first class women in the boat sit, stunned, listening to 
               the sounds of hundreds screaming.

                                     HITCHINS
                         They'll pull us right down I tell 
                         ya!

                                     MOLLY
                         Aw knock it off, yer scarin' me. 
                         Come on girls, grab your oars. Let's 
                         go.
                              (nobody moves)
                         Well come on!

               The women won't meet her eyes. They huddle into their ermine 
               wraps.

                                     MOLLY
                         I don't understand a one of you. 
                         What's the matter with you? It's 
                         your men back there! We got plenty 
                         a' room for more.

                                     HITCHINS
                         If you don't shut that hole in yer 
                         face, there'll be one less in this 
                         boat!

               Ruth keeps her ears covered and her eyes closed, shutting it 
               all out.

               IN BOAT ONE

               Sir Cosmo and Lucile Duff-Gordon sit with ten other people 
               in a boat that is two thirds empty. They are two hundred 
               yards from the screaming in the darkness.

                                     FIREMAN HENDRICKSON
                         We should do something.

               Lucile squeezes Cosmo's hand and pleads him with her eyes. 
               She is terrified.

                                     SIR COSMO
                         It's out of the question.

               The crewmembers, intimidated by a nobleman, acquiesce. They 
               hunch guiltily, hoping the sound will stop soon.

               TWENTY BOATS, most half full, float in the darkness. None of 
               them make a move.

                                                                    CUT TO:

               EXT. OCEAN

               Jack and Rose drift under the blazing stars. The water is 
               glassy, with only the faintest undulating swell. Rose can 
               actually see the stars reflecting on the black mirror of the 
               sea.

               Jack squeezes the water out of her long coat, tucking it in 
               tightly around her legs. He rubs her arms. His face is chalk 
               with in the darkness. A low MOANING in the darkness around 
               them.

                                     ROSE
                         It's getting quiet.

                                     JACK
                         Just a few more minutes. It'll take 
                         them a while to get the boats 
                         organized...

               Rose is unmoving, just staring into space. She knows the 
               truth. There won't be any boats. Behind Jack she sees that 
               Officer Wilde has stopped moving. He is slumped in his 
               lifejacket, looking almost asleep. He has died of exposure 
               already.

                                     JACK
                         I don't know about you, but I intend 
                         to write a strongly worded letter to 
                         the White Star Line about all this.

               She laughs weakly, but it sounds like a gasp of fear. Rose 
               finds his eyes in the dim light.

                                     ROSE
                         I love you Jack.

               He takes her hand.

                                     JACK
                         No... don't say your good-byes, Rose. 
                         Don't you give up. Don't do it.

                                     ROSE
                         I'm so cold.

                                     JACK
                         You're going to get out of this... 
                         you're going to go on and you're 
                         going to make babies and watch them 
                         grow and you're going to die an old 
                         lady, warm in your bed. Not here. 
                         Not this night. Do you understand 
                         me?

                                     ROSE
                         I can't feel my body.

                                     JACK
                         Rose, listen to me. Listen. Winning 
                         that ticket was the best thing that 
                         ever happened to me.

               Jack is having trouble getting the breath to speak.

                                     JACK
                         It brought me to you. And I'm 
                         thankful, Rose. I'm thankful.

               His voice is trembling with the cold which is working its 
               way to his heart. But his eyes are unwavering.

                                     JACK
                         You must do me this honor... promise 
                         me you will survive... that you will 
                         never give up... no matter what 
                         happens... no matter how hopeless... 
                         promise me now, and never let go of 
                         that promise.

                                     ROSE
                         I promise.

                                     JACK
                         Never let go.

                                     ROSE
                         I promise. I will never let go, Jack. 
                         I'll never let go.

               She grips his hand and they lie with their heads together. 
               It is quiet now, except for the lapping of the water.

                                                                    CUT TO:

               EXT. LIFEBOATS / OCEAN - NIGHT

               Fifth Officer Lowe, the impetuous young Welshman, has gotten 
               Boats 10, 12 and Collapsible D together with his own Boat 
               14. A demon of energy, he's had everyone hold the boats 
               together and is transferring passengers from 14 into the 
               others, to empty his boat for a rescue attempt.

               As the women step gingerly across the other boats, Lowe sees 
               a shawled figure in too much of a hurry. He rips the shawl 
               off, and finds himself staring into the face of a man. He 
               angrily shoves the stowaway into another boat and turns to 
               his crew of three.

                                     LOWE
                         Right, man the oars.

                                                                    CUT TO:

               EXT. OCEAN / BOAT

               The beam of an electric torch plays across the water like a 
               searchlight as boat 14 comes toward us.

               ANGLE FROM THE BOAT

               As the torch illuminates floating debris, a poignant trail 
               of flotsam: a violin, a child's wooden soldier, a framed 
               photo of a steerage family. Daniel Marvin's wooden Biograph 
               camera.

               Then, their white lifebelts bobbing in the darkness like 
               sign posts, the first bodies come into the torch's beam. The 
               people are dead but not drowned, killed by the freezing water. 
               Some look like they could be sleeping. Others stare with 
               frozen eyes at the stars.

               Soon bodies are so thick the seamen cannot row. They hit the 
               oars on the heads of floating men and women... a wooden thunk. 
               One seaman throws up. Lowe sees a mother floating with her 
               arms frozen around her lifeless baby.

                                     LOWE
                              (the worst moment of 
                              his life)
                         We waited too long.

                                                                    CUT TO:

               EXT. OCEAN

               IN A HOVERING DOWNANGLE we see Jack and Rose floating in the 
               black water. The stars reflect in the mill pond surface, and 
               the two of them seem to be floating in interstellar space. 
               They are absolutely still. Their hands are locked together. 
               Rose is staring upwards at the canopy of stars wheeling above 
               her. The music is transparent, floating... as the long sleep 
               steals over Rose, and she feels peace.

               CLOSE ON ROSE'S FACE

               Pale, like the faces of the dead. She seems to be floating 
               in a void. Rose is in a semi-hallucinatory state. She knows 
               she is dying. Her lips barely move as she sings a scrap of 
               Jack's song:

                                     ROSE
                         "Come Josephine in my flying 
                         machine..."

               ROSE'S POV

               The stars. Like you've never seen them. The Milky Way a 
               glorious band from horizon to horizon.

               A SHOOTING STAR flares... a line of light across the heavens.

               TIGHT ON ROSE AGAIN

               We see that her hair is dusted with frost crystals. Her 
               breathing is so shallow, she is almost motionless. Her eyes 
               track down from the stars to the water.

               ROSE'S POV - SLOW MOTION

               The silhouette of a boat crossing the stars. She sees men in 
               it, rowing so slowly the oars lift out of the syrupy water, 
               leaving weightless pearls floating in the air. The VOICES of 
               the men sound slow and DISTORTED.

               Then the lookout flashes his torch toward her and the light 
               flares across the water, silhouetting the bobbing corpses in 
               between. It flicks past her motionless form and moves on. 
               The boat is 50 feet away, and moving past her. The men look 
               away.

               Rose lifts her head to turn to Jack. We see that her hair 
               has frozen to the wood under her.

                                     ROSE
                              (barely audible)
                         Jack.

               She touches his shoulder with her free hand. He doesn't 
               respond. Rose gently turns his face toward her. It is rimed 
               with frost.

               He seems to be sleeping peacefully.

               But he is not asleep.

               Rose can only stare at his still face as the realization 
               goes through her.

                                     ROSE
                         Oh, Jack.

               All hope, will and spirit leave her. She looks at the boat. 
               It is further away now, the voices fainter. Rose watches 
               them go.

               She closes her eyes. She is so weak, and there just seems to 
               be no reason to even try.

               And then... her eyes snap open.

               She raises her head suddenly, cracking the ice as she rips 
               her hair off the wood. She calls out, but her voice is so 
               weak they don't hear her. The boat is invisible now, the 
               torch light a star impossibly far away. She struggles to 
               draw breath, calling again.

               IN THE BOAT

               Lowe hears nothing behind him. He points to something ahead, 
               turning the tiller.

               ROSE

               Struggles to move. Her hand, she realizes, is actually frozen 
               to Jack's. She breaths on it, melting the ice a little, and 
               gently unclasps their hands, breaking away a thin tinkling 
               film.

                                     ROSE
                         I won't let go. I promise.

               She releases him and he sinks into the black water. He seems 
               to fade out like a spirit returning to some immaterial plane.

               Rose rolls off the floating staircase and plunges into the 
               icy water. She swims to Chief Officer Wilde's body and grabs 
               his whistle. She starts to BLOW THE WHISTLE with all the 
               strength in her body. Its sound slaps across the still water.

               IN BOAT 14

               Lowe whips around at the sound of the whistle.

                                     LOWE
                              (turning the tiller)
                         Row back! That way! Pull!

               Rose keeps blowing as the boat comes to her. She is still 
               blowing when Lowe takes the whistle from her mouth as they 
               haul her into the boat. She slips into unconsciousness and 
               they scramble to cover her with blankets...

                                                               DISSOLVE TO:

               INT. IMAGING SHACK / KELDYSH

               EXTREME CLOSEUP of Rose's ancient, wrinkled face. Present 
               day.

                                     OLD ROSE
                         Fifteen hundred people went into the 
                         sea when Titanic sank from under us. 
                         There were twenty boats floating 
                         nearby and only one came back. One. 
                         Six were saved from the water, myself 
                         included. Six out of fifteen hundred.

               As she speaks THE CAMERA TRACKS slowly across the faces of 
               Lizzy and the salvage crew on Keldysh. Lovett, Bodine, Buell, 
               the others... the reality of what happened here 84 years 
               before has hit them like never before. With her story Rose 
               has put them on Titanic in its final hours, and or the first 
               time, they do feel like graverobbers.

               Lovett, for the first time, has even forgotten to ask about 
               the diamond.

                                     OLD ROSE
                         Afterward, the seven hundred people 
                         in the boats had nothing to do but 
                         wait... wait to die, wait to live, 
                         wait for an absolution which would 
                         never come.

                                                               DISSOLVE TO:

               EXT. LIFEBOATS / OPEN SEA - PRE-DAWN

               MATCHING MOVE as the camera tracks along the faces of the 
               saved.

                                                               DISSOLVE TO:

               ANOTHER BOAT

               And then ANOTHER, seeing faces we know among the survivors: 
               Ismay in a trance, just staring and trembling... Cal, sipping 
               from a hip flask offered to him by a black-faced stoker... 
               Ruth hugging herself, rocking gently.

               IN BOAT 14

               CLOSE ON ROSE

               Lying swaddled. Only her face is visible, white as the moon. 
               The man next to her jumps up, pointing and yelling. Soon 
               everyone is looking and shouting excitedly. In Rose's POV it 
               is all silent, SLOW MOTION.

               IN SLOW-MOTION SILENCE

               We see Lowe light a green flare and wave it as everyone shouts 
               and cheers. Rose doesn't react. She floats beyond all human 
               emotion.

                                                               DISSOLVE TO:

               EXT. LIFEBOATS / OPEN SEA - DAWN

               Golden light washes across the white boats, which gloat in a 
               calm sea reflecting the rosy sky. All around them, like a 
               flotilla of sailing ships, are icebergs. The CARPATHIA sits 
               nearby, as boats row toward her.

                                                               DISSOLVE TO:

               EXT. LIFEBOATS / OCEAN / CARPATHIA MONTAGE - DAY

               IMAGES DISSOLVE into one another: a ship's hull looming, 
               with the letters "CARPATHIA" visible on the bow... Rose 
               watching, rocked by the sea, her face blank... seamen helping 
               survivors up the rope ladder to the Carpathia's gangway 
               doors... two women crying and hugging each other inside the 
               ship... ALL SILENT, ALL IN SLOW-MOTION. There is just music, 
               so gentle and sad, part elegy, part hymn, part aching song 
               of love lost forever.

               THE IMAGES CONTINUE to music... Rose, outside of time, outside 
               of herself, coming into Carpathia, barely able to stand... 
               Rose being draped with warm blankets and given hot tea... 
               Bruce Ismay climbing aboard. He has the face and eyes of a 
               damned soul.

               As Ismay walks along the hall, guided by a crewman toward 
               the doctor's cabin, he passes rows of seated and standing 
               widows. He must run the gauntlet of their accusing gazes.

                                                                    CUT TO:

               EXT. DECK / CARPATHIA - DAY

               It is the afternoon of the 15th. Cal is searching the faces 
               of the widows lining the deck, looking for Rose. The deck of 
               Carpathia is crammed with huddled people, and even the 
               recovered lifeboats of Titanic. On a hatch cover sits an 
               enormous pile of lifebelts.

               He keeps walking toward the stern. Seeing Cal's tuxedo, a 
               steward approaches him.

                                     CARPATHIA STEWARD
                         You won't find any of your people 
                         back here, sir. It's all steerage.

               Cal ignores him and goes amongst this wrecked group, looking 
               under shawls and blankets at one bleak face after another.

               Rose is sipping hot tea. Her eyes focus on him as he 
               approaches her. He barely recognizes her. She looks like a 
               refugee, her matted hair hanging in her eyes.

                                     ROSE
                         Yes, I lived. How awkward for you.

                                     CAL
                         Rose... your mother and I have been 
                         looking for you --

               She holds up her hand, stopping him.

                                     ROSE
                         Please don't. Don't talk. Just listen. 
                         We will make a deal, since that is 
                         something you understand. From this 
                         moment you do not exist for me, nor 
                         I for you. You shall not see me again. 
                         And you will not attempt to find me. 
                         In return I will keep my silence. 
                         Your actions last night need never 
                         come to light, and you will get to 
                         keep the honor you have carefully 
                         purchased.

               She fixes him with a glare as cold and hard as the ice which 
               changed their lives.

                                     ROSE
                         Is this in any way unclear?

                                     CAL
                              (after a long beat)
                         What do I tell your mother?

                                     ROSE
                         Tell her that her daughter died with 
                         the Titanic.

               She stands, turning to the rail. Dismissing him. We see Cal 
               stricken with emotion.

                                     CAL
                         You're precious to me, Rose.

                                     ROSE
                         Jewels are precious. Goodbye, Mr. 
                         Hockley.

               We see that in his way, the only way he knows, he does truly 
               love her.

               After a moment, he turns and walks away.

                                     OLD ROSE (V.O.)
                         That was the last time I ever saw 
                         him. He married, of course, and 
                         inherited his millions. The crash of 
                         28 hit his interests hard, and he 
                         put a pistol in his mouth that year. 
                         His children fought over the scraps 
                         of his estate like hyenas, or so I 
                         read.

               ANGLE ON ROSE

               At the railing of the Carpathia, 9pm April 18th. She gazes 
               up at the Statue of Liberty, looking just as it does today, 
               welcoming her home with her glowing torch. It is just as 
               Fabrizio saw it, so clearly, in his mind.

               LATER CARPATHIA DISGORGES THE SURVIVORS

               At the Cunard pier, Pier 54. Over 30,000 people line the 
               dock and fill the surrounding streets. The magnesium flashes 
               of the photographers go off like small bombs, lighting an 
               amazing tableau.

               Several hundred police keep the mob back. The dock is packed 
               with friends and relatives, officials, ambulances, and the 
               press --

               Reporters and photographers swarm everywhere... 6 deep at 
               the foot of the gangways, lining the tops of cars and 
               trucks... it is the 1912 equivalent of a media circus. They 
               jostle to get close to the survivors, tugging on them as 
               they pass and shouting over each other to ask them questions.

               Rose is covered with a woolen shawl and walking with a group 
               of steerage passengers. Immigration officers are asking them 
               questions as they come off the gangway.

                                     IMMIGRATION OFFICER
                         Name?

                                     ROSE
                         Dawson. Rose Dawson.

               The officer steers her toward a holding area for processing. 
               Rose walks forward with the dazed immigrants. The BOOM! of 
               photographer's magnesium flashes cause them to flinch, and 
               the glare is blinding. There is a sudden disturbance near 
               her as two men burst through the cordon, running to embrace 
               an older woman along the survivors, who cries out with joy. 
               The reporters converge on this emotional scene, and flashes 
               explode.

               Rose uses this moment to slip away into the crowd. She pushes 
               through the jostling people, moving with purpose, and none 
               challenges her in the confusion.

                                     OLD ROSE (V.O.)
                         Can you exchange one life for another? 
                         A caterpillar turns into a butterfly. 
                         If a mindless insect can do it, why 
                         couldn't I? Was it any more 
                         unimaginable than the sinking of the 
                         Titanic?

               TRACKING WITH HER as she walks away, further and further 
               until she flashes and the roar are far behind her, and she 
               is still walking, determined.

                                                                    CUT TO:

               INT. IMAGING SHACK / KELDYSH

               Old Rose sits with the group in the Imaging Shack, lit by 
               the blue glow of the screens. She holds the haircomb with 
               the jade butterfly on the handle in her gnarled hands.

                                     BODINE
                         We never found anything on Jack. 
                         There's no record of him at all.

                                     OLD ROSE
                         No, there wouldn't be, would there? 
                         And I've never spoken of him until 
                         now, not to anyone.
                              (to Lizzy)
                         Not even your grandfather. A woman's 
                         heart is a deep ocean of secrets. 
                         But now you all know there was a man 
                         named Jack Dawson, and that he saved 
                         me, in every way that a person can 
                         be saved.
                              (closing her eyes)
                         I don't even have a picture of him. 
                         He exists now only in my memory.

                                                                    CUT TO:

               EXT. OCEAN FLOOR / TITANIC WRECK

               The Mir submersibles make their last pass over the ship. We 
               hear Yuri the pilot on the UQC:

                                     YURI
                         Mir One returning to surface.

               The sub rises off the deck of the wreck, taking its light 
               with it, leaving the Titanic once again it its fine and 
               private darkness.

                                                                    CUT TO:

               EXT. KELDYSH DECK

               A desultory wrap party for the expedition is in progress. 
               There is music and some of the (co-ed) Russian crew are 
               dancing. Bodine is getting drunk in the aggressive style of 
               Baker Joughin.

               Lovett stands at the rail, looking down into the black water. 
               Lizzy comes to him, offering him a beer. She puts her hand 
               on his arm.

                                     LIZZY
                         I'm sorry.

                                     LOVETT
                         We were pissin' in the wind the whole 
                         time.

               Lovett notices a figure move through the lights far down at 
               the stern of the ship.

                                     LOVETT
                         Oh shit.

                                                                    CUT TO:

               EXT. KELDYSH STERN DECK

               Rose walks through the shadows of the deck machinery. Her 
               nightgown blows in the wind. Her feet are bare. Her hands 
               are clutched at her chest, almost as if she is praying.

               ON LOVETT AND LIZZY

               Running down the stairs from the top deck, hauling ass.

               ROSE

               Reaches the stern rail. Her gnarled fingers wrap over the 
               rail. Her ancient foot steps up on the gunwale. She pushes 
               herself up, leaning forward. Over her shoulder, we see the 
               black water glinting far below.

               LOVETT AND LIZZY

               Run up behind her.

                                     LIZZY
                         Grandma, wait!! Don't --

               Rose turns her head.

               Looking at them. She turns further, and we see she has 
               something in her hand, something she was about to drop 
               overboard.

               It is the "Heart of the Ocean".

               Lovett sees his holy grail in her hand and his eyes go wide. 
               Rose keeps it over the railing where she can drop it anytime.

                                     ROSE
                         Don't come any closer.

                                     LOVETT
                         You had it the entire time?!

                                                              FLASH CUT TO:

               SILENT IMAGE OF YOUNG ROSE

               Walking away from Pier 54. The photographers' flashes go off 
               like a battle behind her. She has her hands in her pockets. 
               She stops, feeling something, and pulls out the necklace. 
               She stares at it in amazement.

               BACK ON KELDYSH

               Rose smiles at Brock's incomprehension.

                                     ROSE
                         The hardest part about being so poor, 
                         was being so rich. But every time I 
                         though of selling it, I though of 
                         Cal. And somehow I always got by 
                         without his help.

               She holds it out over the water. Bodine and a couple of the 
               other guys come up behind Lovett, reacting to what is in 
               Rose's hand.

                                     BODINE
                         Holy shit.

                                     LOVETT
                         Don't drop it Rose.

                                     BODINE
                              (a fierce whisper)
                         Rush her.

                                     LOVETT
                              (to Bodine)
                         It's hers, you schmuck.
                              (to her)
                         Look, Rose, I... I don't know what 
                         to say to a woman who tries to jump 
                         off the Titanic when it's not sinking, 
                         and jumps back onto it when it is... 
                         we're not dealing with logic here, I 
                         know that... but please... think 
                         about this a second.

                                     ROSE
                         I have. I came all the way here so 
                         this could go back where it belongs.

               The massive diamond glitters. Brock edges closer and holds 
               out his hand...

                                     LOVETT
                         Just let me hold it in my hand, Rose. 
                         Please. Just once.

               He comes closer to her. It is reminiscent of Jack slowly 
               moving up to her at the stern of Titanic.

               Surprisingly, she calmly places the massive stone in the 
               palm of his hand, while still holding onto the necklace. 
               Lovett gazes at the object of his quest. An infinity of cold 
               scalpels glint in its blue depths. It is mesmerizing. It 
               fits in his hand just like he imagined.

                                     LOVETT
                         My God.

               His grip tightens on the diamond.

               He looks up, meeting her gaze. Her eyes are suddenly 
               infinitely wise and deep.

                                     ROSE
                         You look for treasures in the wrong 
                         place, Mr. Lovett. Only life is 
                         priceless, and making each day count.

               His fingers relax. He opens them slowly. Gently she slips 
               the diamond out of his hand. He feels it sliding away.

               Then, with an impish little grin, Rose tosses the necklace 
               over the rail. Lovett gives a strangled cry and rushes to 
               the rail in time to see it hit the water and disappear 
               forever.

                                     BODINE
                         Aww!! That really sucks, lady!

               Brock Lovett goes through ten changes before he settles on a 
               reaction... HE LAUGHS. He laughs until the tears come to his 
               eyes. Then he turns to Lizzy.

                                     LOVETT
                         Would you like to dance?

               Lizzy grins at him and nods. Rose smiles. She looks up at 
               the stars.

               IN THE BLACK HEART OF THE OCEAN

               The diamond sinks, twinkling end over end, into the infinite 
               depths.

                                                                    CUT TO:

               INT. ROSE'S CABIN / KELDYSH

               A GRACEFUL PAN across Rose's shelf of carefully arranged 
               pictures:

               Rose as a young actress in California, radiant... a 
               theatrically lit studio publicity shot... Rose and her 
               husband, with their two children... Rose with her son at his 
               college graduation... Rose with her children and grandchildren 
               at her 70th birthday. A collage of images of a life lived 
               well.

               THE PAN STOPS on an image filling frame. Rose, circa 1920. 
               She is at the beach, sitting on a horse at the surfline. The 
               Santa Monica pier, with its rollercoaster is behind her. She 
               is grinning, full of life.

               WE PAN OFF the last picture to Rose herself, warm in her 
               bunk. A profile shot. She is very still. She could be 
               sleeping, or maybe something else.

                                                                    CUT TO:

               BLACKNESS

               THE WRECK OF TITANIC looms like a ghost out of the dark. It 
               is lit by a kind of moonlight, a light of the mind. We pass 
               over the endless forecastle deck to the superstructure, moving 
               faster than subs can move... almost like we are flying.

               WE GO INSIDE

               And the echoing sound of distant waltz music is heard. The 
               rust fades away from the walls of the dark corridor and it 
               is transformed... We EMERGE onto the grand staircase, lit by 
               glowing chandelier. The music is vibrant now, and the room 
               is populated by men in tie and tails, women in gowns. It is 
               exquisitely beautiful.

               IN POV

               We sweep down the staircase. The crowd of beautiful gentlemen 
               and ladies turn as we descend toward them. At the bottom a 
               man stands with his back to us... he turns and it is Jack. 
               Smiling he holds his hand out toward us.

               IN A SIDE ANGLE

               Rose goes into his arms, a girl of 17. The passengers, 
               officers and crew of the RMS Titanic smile and applaud in 
               the utter silence of the abyss.

                                                                  FADE OUT:

                                         THE END`


sendScript(content)
    .then(e => console.log(`Guión enviado ✅, ${e} mensajes enviados 🤓`)).catch(console.error)