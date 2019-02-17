var clusterMaker = require('clusters');
 

var color_map = {
  "css":"#845EC2",
	"html":"#D65DB1",
	"javascript":"#FF6F91",
	"python":"#FF9671",
	"java":"#FFC75F",
	"c++":"#F9F871",
	"c":"#2C73D2",
	"c#":"#0089BA"
};
 
 


json4 = JSON.parse('[{"name":"Calculator-Project-Unity","commits":[{"languages":{"c#":286}}]},{"name":"Connect-Four-JavaFX-","commits":[{"languages":{"java":99}}]},{"name":"Data-Structures","commits":[{"languages":{"c":47}},{"languages":{"c":87}}]},{"name":"GitWorkshopFall2018","commits":[]},{"name":"Java-Dice","commits":[{"languages":{"java":103}}]},{"name":"Programming-Practice","commits":[{"languages":{"python":25}},{"languages":{"python":0}},{"languages":{"java":163}},{"languages":{"python":0}},{"languages":{"python":22}},{"languages":{"python":1}},{"languages":{"python":24}},{"languages":{"python":18}},{"languages":{"python":12}},{"languages":{"python":8}},{"languages":{"python":15}},{"languages":{"python":9}},{"languages":{"python":13}},{"languages":{"python":3}},{"languages":{"python":20}},{"languages":{"python":0}},{"languages":{"python":21}},{"languages":{"python":17}},{"languages":{"python":2}},{"languages":{"python":18}},{"languages":{"python":14}},{"languages":{"python":1}},{"languages":{"python":6}},{"languages":{"python":28}},{"languages":{"python":11}},{"languages":{"python":29}}]},{"name":"programming-problems","commits":[]},{"name":"react-tutorial-webpack","commits":[]},{"name":"test-backend","commits":[]},{"name":"TicTacToe","commits":[{"languages":{"c#":446}}]},{"name":"TicTacToe-Game-Java","commits":[{"languages":{"java":61}}]}]')
json3 = JSON.parse('[{"name":"android-workshop","commits":[]},{"name":"Anything","commits":[{"languages":{"java":17}},{"languages":{"java":17}}]},{"name":"AR-Draw","commits":[{"languages":{"python":22}},{"languages":{"python":23}},{"languages":{"python":14}}]},{"name":"Balance","commits":[]},{"name":"blinkSaver","commits":[{"languages":{"python":84}},{"languages":{"python":3}},{"languages":{"python":2}},{"languages":{"python":0}},{"languages":{"python":0}}]},{"name":"CourtCounter","commits":[{"languages":{"java":7}},{"languages":{"java":17}}]},{"name":"CUHackingScript","commits":[{"languages":{"python":28}},{"languages":{"python":17}}]},{"name":"DidYouFeelIt","commits":[{"languages":{"java":8}},{"languages":{"java":170}}]},{"name":"dotfiles","commits":[{"languages":{"python":0}}]},{"name":"ember.js","commits":[]},{"name":"firstDjango","commits":[{"languages":{"python":1}},{"languages":{"python":5}},{"languages":{"python":9}},{"languages":{"python":4}},{"languages":{"python":2}},{"languages":{"python":16}}]},{"name":"FirstRails","commits":[{"languages":{"javascript":1}},{"languages":{"html":66}}]},{"name":"go-cloud","commits":[]},{"name":"HackTheWall","commits":[{"languages":{"java":17}}]},{"name":"hello-world","commits":[]},{"name":"jekyll","commits":[]},{"name":"JustJava","commits":[{"languages":{"java":17}}]},{"name":"Miwok","commits":[{"languages":{"java":42}},{"languages":{"java":37}},{"languages":{"java":62}},{"languages":{"java":8}},{"languages":{"java":13}}]},{"name":"neovim","commits":[]},{"name":"Node-Authentication-Passport","commits":[{"languages":{"javascript":0}}]},{"name":"NotSub","commits":[{"languages":{"java":1}},{"languages":{"java":15}},{"languages":{"java":1}},{"languages":{"java":55}},{"languages":{"java":17}}]},{"name":"Pets","commits":[{"languages":{"java":5}},{"languages":{"java":21}},{"languages":{"java":61}},{"languages":{"java":253}},{"languages":{"java":14}},{"languages":{"java":40}}]},{"name":"Pitch-Perfect","commits":[]},{"name":"QuakeReport","commits":[{"languages":{"java":54}},{"languages":{"java":11}},{"languages":{"java":36}},{"languages":{"java":58}},{"languages":{"java":89}},{"languages":{"java":2}},{"languages":{"java":8}},{"languages":{"java":55}},{"languages":{"java":3}},{"languages":{"java":1}},{"languages":{"java":77}},{"languages":{"java":45}}]},{"name":"Rails-Tutorial","commits":[{"languages":{"html":66}}]},{"name":"RailsToyApp","commits":[{"languages":{"html":66}}]},{"name":"samjjc.github.io","commits":[{"languages":{"html":8}},{"languages":{"html":22}},{"languages":{"html":92}},{"languages":{"html":24}}]},{"name":"shippy","commits":[]},{"name":"ShopicruitFall17","commits":[{"languages":{"java":17}}]},{"name":"ShopicruitSummer17","commits":[{"languages":{"python":13}}]}]')
json2 = JSON.parse('[{"name":"2019-Web-Developer-Challenge","commits":[{"date":"2018-12-22T16:36:10Z","languages":{"javascript":9}},{"date":"2018-12-22T16:33:20Z","languages":{"javascript":8}},{"date":"2018-12-22T16:30:55Z","languages":{"javascript":1}},{"date":"2018-12-22T16:12:46Z","languages":{"css":35}}]},{"name":"camouse","commits":[{"date":"2018-02-18T17:53:58Z","languages":{"java":16}},{"date":"2018-02-18T16:33:38Z","languages":{"java":102}},{"date":"2018-02-18T16:13:32Z","languages":{"java":11}},{"date":"2018-02-18T14:07:11Z","languages":{"java":106}},{"date":"2018-02-18T08:29:25Z","languages":{"java":5}},{"date":"2018-02-18T07:44:20Z","languages":{"java":9}},{"date":"2018-02-18T07:05:37Z","languages":{"java":9}},{"date":"2018-02-18T07:00:39Z","languages":{"java":14}},{"date":"2018-02-18T07:00:28Z","languages":{"java":14}},{"date":"2018-02-18T02:51:23Z","languages":{"java":15}},{"date":"2018-02-17T22:09:10Z","languages":{"java":0}},{"date":"2018-02-17T22:08:13Z","languages":{"java":50}},{"date":"2018-02-17T22:07:59Z","languages":{"java":50}},{"date":"2018-02-17T22:06:49Z","languages":{"java":50}},{"date":"2018-02-17T21:21:39Z","languages":{"java":50}}]},{"name":"ChatApp","commits":[{"date":"2018-08-11T02:16:47Z","languages":{"javascript":0}},{"date":"2018-08-10T23:56:30Z","languages":{"javascript":206}},{"date":"2018-07-08T02:21:44Z","languages":{"javascript":4}},{"date":"2018-07-07T18:11:20Z","languages":{"javascript":0}},{"date":"2018-07-04T04:01:27Z","languages":{"javascript":1}},{"date":"2018-07-04T04:00:09Z","languages":{"javascript":1}},{"date":"2018-07-04T03:50:07Z","languages":{"javascript":1}},{"date":"2018-07-04T03:49:26Z","languages":{"javascript":1}},{"date":"2018-07-04T03:44:51Z","languages":{"javascript":0}},{"date":"2018-07-04T03:37:18Z","languages":{"javascript":1}},{"date":"2018-07-04T03:05:23Z","languages":{"javascript":1}},{"date":"2018-06-30T13:49:34Z","languages":{"javascript":10}},{"date":"2018-06-30T13:40:26Z","languages":{"javascript":22}},{"date":"2018-06-30T04:43:41Z","languages":{"javascript":2}},{"date":"2018-06-30T03:20:06Z","languages":{"css":2}},{"date":"2018-06-30T02:59:02Z","languages":{"javascript":11}},{"date":"2018-06-28T03:48:43Z","languages":{"css":4}},{"date":"2018-06-28T03:32:52Z","languages":{"html":1}},{"date":"2018-06-27T04:44:25Z","languages":{"html":22}},{"date":"2018-06-25T23:28:50Z","languages":{"html":1}},{"date":"2018-06-25T22:49:24Z","languages":{"css":21}},{"date":"2018-06-25T22:25:16Z","languages":{"css":10}},{"date":"2018-06-25T15:38:07Z","languages":{"css":4}},{"date":"2018-06-25T15:15:24Z","languages":{"css":6}},{"date":"2018-06-23T19:39:54Z","languages":{"html":1}}]},{"name":"CUHacking","commits":[{"date":"2018-04-01T20:33:43Z","languages":{"java":1}},{"date":"2018-04-01T15:33:22Z","languages":{"java":33}},{"date":"2018-04-01T13:49:48Z","languages":{"java":7}},{"date":"2018-04-01T13:49:16Z","languages":{"java":2}},{"date":"2018-04-01T13:28:36Z","languages":{"java":9}},{"date":"2018-04-01T12:31:22Z","languages":{"java":1}},{"date":"2018-04-01T12:30:57Z","languages":{"java":3}},{"date":"2018-04-01T11:47:38Z","languages":{"java":13}},{"date":"2018-04-01T08:48:04Z","languages":{"java":1}},{"date":"2018-04-01T08:31:50Z","languages":{"java":1}},{"date":"2018-04-01T08:21:49Z","languages":{"java":5}},{"date":"2018-04-01T06:33:51Z","languages":{"java":1}},{"date":"2018-04-01T06:13:31Z","languages":{"java":14}},{"date":"2018-04-01T06:00:15Z","languages":{"java":81}},{"date":"2018-04-01T04:05:11Z","languages":{"java":54}},{"date":"2018-04-01T04:04:33Z","languages":{"java":46}},{"date":"2018-04-01T04:04:11Z","languages":{"java":2}},{"date":"2018-04-01T03:46:16Z","languages":{"java":82}},{"date":"2018-04-01T03:42:53Z","languages":{"html":0}},{"date":"2018-04-01T03:42:00Z","languages":{"java":87}},{"date":"2018-04-01T03:38:06Z","languages":{"java":18}},{"date":"2018-04-01T01:01:40Z","languages":{"javascript":0}},{"date":"2018-04-01T01:00:51Z","languages":{"html":0}},{"date":"2018-03-31T23:31:33Z","languages":{"javascript":70}},{"date":"2018-03-31T22:59:37Z","languages":{"html":77}}]},{"name":"CUHackingServer","commits":[{"date":"2018-04-01T00:16:44Z","languages":{"javascript":5}},{"date":"2018-04-01T00:07:24Z","languages":{"javascript":2}},{"date":"2018-03-31T23:58:07Z","languages":{"javascript":2}},{"date":"2018-03-31T23:47:49Z","languages":{"javascript":1}},{"date":"2018-03-31T23:45:46Z","languages":{"html":77}},{"date":"2018-03-31T23:39:59Z","languages":{"javascript":70}}]},{"name":"ibm-intern-hackathon-2018","commits":[]},{"name":"MultiplayerChess","commits":[{"date":"2017-12-22T22:02:24Z","languages":{"javascript":1}},{"date":"2017-12-22T22:02:05Z","languages":{"html":1}},{"date":"2017-12-22T22:01:42Z","languages":{"javascript":1}},{"date":"2017-12-22T22:00:53Z","languages":{"javascript":1}},{"date":"2017-12-22T21:55:49Z","languages":{"javascript":13}},{"date":"2017-12-22T21:54:07Z","languages":{"javascript":80}},{"date":"2017-12-22T21:53:14Z","languages":{"javascript":0}},{"date":"2017-12-22T21:52:48Z","languages":{"html":0}},{"date":"2017-12-22T21:52:40Z","languages":{"javascript":0}},{"date":"2017-12-22T21:52:10Z","languages":{"javascript":0}},{"date":"2017-12-22T21:51:58Z","languages":{"javascript":0}},{"date":"2017-12-22T21:33:33Z","languages":{"html":4}},{"date":"2017-12-22T21:32:17Z","languages":{"javascript":3}},{"date":"2017-12-22T21:31:33Z","languages":{"javascript":6}},{"date":"2017-12-22T21:30:31Z","languages":{"javascript":2}},{"date":"2017-12-22T21:02:45Z","languages":{"javascript":2}},{"date":"2017-12-22T18:26:43Z","languages":{"javascript":75}},{"date":"2017-12-22T18:25:39Z","languages":{"javascript":75}}]},{"name":"never-afraid-to-ask","commits":[{"date":"2018-09-21T03:20:44Z","languages":{"html":0}},{"date":"2018-09-21T03:18:42Z","languages":{"html":0}},{"date":"2018-09-21T02:15:56Z","languages":{"html":0}},{"date":"2018-09-21T02:09:29Z","languages":{"html":0}},{"date":"2018-09-19T02:20:53Z","languages":{"html":8}},{"date":"2018-09-16T14:42:03Z","languages":{"html":1}},{"date":"2018-09-16T14:04:59Z","languages":{"html":5}},{"date":"2018-09-16T13:44:07Z","languages":{"html":3}},{"date":"2018-09-16T12:13:24Z","languages":{"html":62}},{"date":"2018-09-16T10:56:15Z","languages":{"html":3}},{"date":"2018-09-16T10:55:05Z","languages":{"html":3}},{"date":"2018-09-16T10:49:24Z","languages":{"html":1}},{"date":"2018-09-16T05:34:49Z","languages":{"css":2}},{"date":"2018-09-16T05:32:22Z","languages":{"html":12}},{"date":"2018-09-16T05:18:26Z","languages":{"html":7}},{"date":"2018-09-15T22:03:45Z","languages":{"java":7}},{"date":"2018-09-15T22:03:19Z","languages":{"html":17}},{"date":"2018-09-15T21:48:21Z","languages":{"css":1}},{"date":"2018-09-15T20:14:33Z","languages":{"html":38}},{"date":"2018-09-15T15:44:05Z","languages":{"html":15}},{"date":"2018-09-15T11:05:44Z","languages":{"html":0}},{"date":"2018-09-15T09:36:57Z","languages":{"html":5}},{"date":"2018-09-15T08:01:57Z","languages":{"css":1}}]},{"name":"node-chat-app","commits":[{"date":"2018-05-24T23:45:14Z","languages":{"javascript":14}},{"date":"2018-05-24T23:27:39Z","languages":{"javascript":20}},{"date":"2018-05-21T17:54:22Z","languages":{"javascript":0}},{"date":"2018-05-21T17:34:45Z","languages":{"javascript":20}},{"date":"2018-05-21T17:05:17Z","languages":{"javascript":630}},{"date":"2018-05-21T15:36:42Z","languages":{"javascript":4}},{"date":"2018-05-20T00:26:39Z","languages":{"javascript":1}},{"date":"2018-05-20T00:04:28Z","languages":{"javascript":3}},{"date":"2018-05-19T23:39:43Z","languages":{"javascript":18}},{"date":"2018-05-19T22:36:25Z","languages":{"javascript":2}},{"date":"2018-05-19T15:00:19Z","languages":{"javascript":18}},{"date":"2018-05-19T14:23:16Z","languages":{"javascript":16}},{"date":"2018-05-19T13:58:49Z","languages":{"javascript":6}},{"date":"2018-05-19T13:50:20Z","languages":{"javascript":12}},{"date":"2018-05-19T13:10:27Z","languages":{"javascript":14}},{"date":"2018-05-19T06:05:02Z","languages":{"javascript":14}}]},{"name":"node-course-2-todo-api","commits":[{"date":"2018-05-18T23:14:12Z","languages":{"javascript":11}},{"date":"2018-05-18T22:21:09Z","languages":{"javascript":2}},{"date":"2018-05-18T21:54:20Z","languages":{"javascript":60}},{"date":"2018-05-18T21:09:31Z","languages":{"javascript":25}},{"date":"2018-05-18T20:59:45Z","languages":{"javascript":24}},{"date":"2018-05-18T03:21:00Z","languages":{"javascript":8}},{"date":"2018-05-18T02:59:45Z","languages":{"javascript":53}},{"date":"2018-05-18T02:22:09Z","languages":{"javascript":15}},{"date":"2018-05-18T01:37:50Z","languages":{"javascript":97}},{"date":"2018-05-16T00:05:25Z","languages":{"javascript":19}},{"date":"2018-05-15T22:55:53Z","languages":{"javascript":5}},{"date":"2018-05-15T22:27:58Z","languages":{"javascript":26}},{"date":"2018-05-13T18:54:01Z","languages":{"javascript":4}},{"date":"2018-05-13T18:17:08Z","languages":{"javascript":46}},{"date":"2018-05-13T17:51:39Z","languages":{"javascript":28}},{"date":"2018-05-13T17:16:24Z","languages":{"javascript":43}},{"date":"2018-05-13T16:50:17Z","languages":{"javascript":18}},{"date":"2018-05-13T16:09:31Z","languages":{"javascript":1}},{"date":"2018-05-13T15:18:54Z","languages":{"javascript":2}},{"date":"2018-05-13T15:13:14Z","languages":{"javascript":1}},{"date":"2018-05-13T15:04:18Z","languages":{"javascript":3}},{"date":"2018-05-13T14:41:12Z","languages":{"javascript":32}},{"date":"2018-05-13T01:14:57Z","languages":{"javascript":20}},{"date":"2018-05-13T00:55:22Z","languages":{"javascript":42}},{"date":"2018-05-13T00:17:06Z","languages":{"javascript":26}},{"date":"2018-05-13T00:00:37Z","languages":{"javascript":10}},{"date":"2018-05-12T23:44:17Z","languages":{"javascript":56}},{"date":"2018-05-12T22:52:56Z","languages":{"javascript":28}},{"date":"2018-05-12T20:37:54Z","languages":{"javascript":41}},{"date":"2018-05-12T18:21:05Z","languages":{"javascript":39}}]},{"name":"node-course-2-web-server","commits":[{"date":"2018-05-07T01:21:13Z","languages":{"javascript":3}},{"date":"2018-05-06T01:11:02Z","languages":{"javascript":67}}]}]')
json1 = JSON.parse('[{"name":"BlogProject-wdb","commits":[{"date":"2018-12-30T22:37:31Z","languages":{"css":4}},{"date":"2018-12-30T20:08:09Z","languages":{"css":7}},{"date":"2018-12-30T19:45:08Z","languages":{"javascript":59}},{"date":"2018-12-30T17:55:24Z","languages":{"javascript":0}}]},{"name":"CUHacking-Pyctionary","commits":[{"date":"2017-03-05T19:03:56Z","languages":{"javascript":46}},{"date":"2017-03-05T14:46:17Z","languages":{"python":4}},{"date":"2017-03-05T14:46:04Z","languages":{"javascript":6}},{"date":"2017-03-05T09:12:52Z","languages":{"javascript":40}},{"date":"2017-03-05T07:04:56Z","languages":{"javascript":20}},{"date":"2017-03-05T06:08:45Z","languages":{"javascript":28}},{"date":"2017-03-04T23:16:58Z","languages":{"python":21}},{"date":"2017-03-04T23:16:31Z","languages":{"javascript":45}},{"date":"2017-03-04T18:00:00Z","languages":{"html":1}},{"date":"2017-03-04T17:56:39Z","languages":{"html":11}}]},{"name":"docker-k8s","commits":[{"date":"2019-01-17T14:54:24Z","languages":{"javascript":4}},{"date":"2019-01-17T05:59:35Z","languages":{"javascript":135}}]},{"name":"habitica","commits":[]},{"name":"kNN-GUI-and-Algorithm","commits":[{"date":"2017-12-11T01:31:38Z","languages":{"java":0}},{"date":"2017-12-11T01:26:48Z","languages":{"java":0}},{"date":"2017-12-09T03:25:09Z","languages":{"javascript":1}},{"date":"2017-12-09T03:21:28Z","languages":{"javascript":1}},{"date":"2017-12-08T13:10:06Z","languages":{"java":7}},{"date":"2017-12-08T12:18:14Z","languages":{"java":2}},{"date":"2017-12-08T12:05:41Z","languages":{"java":56}},{"date":"2017-11-14T04:21:29Z","languages":{"java":633}},{"date":"2017-11-12T21:23:13Z","languages":{"java":20}},{"date":"2017-11-12T21:15:55Z","languages":{"java":20}},{"date":"2017-11-12T21:10:03Z","languages":{"java":136}},{"date":"2017-11-12T20:47:20Z","languages":{"java":2}},{"date":"2017-11-12T20:31:16Z","languages":{"java":0}},{"date":"2017-11-11T00:21:17Z","languages":{"java":0}},{"date":"2017-11-11T00:10:13Z","languages":{"java":0}},{"date":"2017-11-10T23:55:43Z","languages":{"java":76}}]},{"name":"Mock-TFTP-Client-And-Server","commits":[{"date":"2018-04-11T04:19:52Z","languages":{"java":6}},{"date":"2018-04-11T04:15:07Z","languages":{"java":4}},{"date":"2018-04-11T04:14:56Z","languages":{"java":4}},{"date":"2018-04-11T03:50:53Z","languages":{"java":2}},{"date":"2018-04-11T03:48:49Z","languages":{"java":38}},{"date":"2018-04-11T03:04:25Z","languages":{"java":12}},{"date":"2018-03-24T22:05:04Z","languages":{"java":18}},{"date":"2018-03-24T22:03:57Z","languages":{"java":4}},{"date":"2018-03-11T03:00:15Z","languages":{"java":2}},{"date":"2018-03-11T01:55:25Z","languages":{"java":2}},{"date":"2018-03-11T00:04:38Z","languages":{"java":31}},{"date":"2018-03-10T23:55:37Z","languages":{"java":0}},{"date":"2018-03-10T23:53:06Z","languages":{"java":4}},{"date":"2018-03-10T23:20:21Z","languages":{"java":33}},{"date":"2018-02-27T20:54:13Z","languages":{"java":157}},{"date":"2018-02-18T03:09:01Z","languages":{"java":5}},{"date":"2018-02-18T02:13:38Z","languages":{"java":22}},{"date":"2018-02-18T01:47:27Z","languages":{"java":9}},{"date":"2018-02-18T01:34:30Z","languages":{"java":31}},{"date":"2018-02-18T01:29:33Z","languages":{"java":7}},{"date":"2018-02-18T00:29:17Z","languages":{"java":39}},{"date":"2018-02-18T00:13:51Z","languages":{"java":2}},{"date":"2018-02-17T23:02:32Z","languages":{"java":2}},{"date":"2018-02-17T22:46:10Z","languages":{"java":1}},{"date":"2018-02-13T21:43:59Z","languages":{"java":2}},{"date":"2018-02-02T07:33:39Z","languages":{"java":44}},{"date":"2018-02-02T07:27:50Z","languages":{"java":11}},{"date":"2018-02-02T07:00:09Z","languages":{"java":44}},{"date":"2018-02-01T22:46:32Z","languages":{"java":4}}]},{"name":"movie-recommendations","commits":[]},{"name":"MTG-FB-Chatbot","commits":[{"date":"2018-02-19T16:51:39Z","languages":{"python":4}},{"date":"2018-02-14T09:38:27Z","languages":{"python":92}}]},{"name":"multi-docker-k8s","commits":[]},{"name":"multi-k8s","commits":[]},{"name":"Patatap-clone-wdb","commits":[{"date":"2018-12-25T23:08:17Z","languages":{"html":183}},{"date":"2018-12-25T21:35:23Z","languages":{"html":32}}]},{"name":"TELME-QHacks2018","commits":[{"date":"2018-02-24T05:28:13Z","languages":{"html":1}},{"date":"2018-02-24T05:21:07Z","languages":{"html":0}},{"date":"2018-02-14T09:51:03Z","languages":{"html":0}},{"date":"2018-02-06T02:35:28Z","languages":{"javascript":0}},{"date":"2018-02-04T16:04:06Z","languages":{"html":76}},{"date":"2018-02-04T12:45:45Z","languages":{"javascript":0}},{"date":"2018-02-04T12:43:24Z","languages":{"javascript":0}},{"date":"2018-02-04T12:39:57Z","languages":{"javascript":26}},{"date":"2018-02-04T12:38:36Z","languages":{"python":9}},{"date":"2018-02-04T12:38:13Z","languages":{"python":6}},{"date":"2018-02-04T11:40:54Z","languages":{"python":4}},{"date":"2018-02-04T11:40:46Z","languages":{"javascript":0}},{"date":"2018-02-03T10:29:23Z","languages":{"python":0}},{"date":"2018-02-03T07:23:47Z","languages":{"python":0}}]},{"name":"ToDoList-WebDevBootcamp","commits":[{"date":"2018-12-25T21:13:29Z","languages":{"html":17}},{"date":"2018-12-25T19:32:05Z","languages":{"html":12}}]},{"name":"training-kit","commits":[]},{"name":"WebDevBootcamp-Colour-Game","commits":[{"date":"2018-12-17T22:48:59Z","languages":{"css":7}}]},{"name":"YelpCamp-WebDevBootcamp","commits":[{"date":"2019-02-02T06:50:25Z","languages":{"javascript":0}},{"date":"2019-01-08T04:49:52Z","languages":{"javascript":2}},{"date":"2019-01-08T04:47:13Z","languages":{"javascript":2}},{"date":"2019-01-08T04:28:28Z","languages":{"javascript":2}},{"date":"2019-01-07T01:39:28Z","languages":{"javascript":4}},{"date":"2019-01-06T18:16:54Z","languages":{"javascript":48}},{"date":"2019-01-06T18:06:16Z","languages":{"javascript":23}},{"date":"2019-01-06T16:45:39Z","languages":{"javascript":11}},{"date":"2019-01-06T16:00:31Z","languages":{"css":7}},{"date":"2018-12-31T00:34:48Z","languages":{"javascript":64}},{"date":"2018-12-30T17:51:42Z","languages":{"javascript":58}},{"date":"2018-12-30T01:48:39Z","languages":{"javascript":16}},{"date":"2018-12-30T00:49:37Z","languages":{"css":0}}]}]')
json = JSON.parse('[{"name":"CAV-AI","commits":[]},{"name":"FoodClustering","commits":[{"date":"2018-10-05T21:20:03Z","languages":{"python":5}},{"date":"2018-10-05T21:06:07Z","languages":{"python":31}},{"date":"2018-10-05T20:15:50Z","languages":{"python":47}}]},{"name":"hackvalleywebsite2017","commits":[{"date":"2017-01-08T09:05:16Z","languages":{"html":46}},{"date":"2017-01-08T08:30:09Z","languages":{"html":68}},{"date":"2017-01-08T07:37:03Z","languages":{"html":2}},{"date":"2017-01-08T07:23:58Z","languages":{"html":11}}]},{"name":"Lab3_SYSC3110-","commits":[{"date":"2018-09-24T14:37:55Z","languages":{"java":2}},{"date":"2018-09-18T16:02:22Z","languages":{"java":22}},{"date":"2018-09-11T18:18:41Z","languages":{"java":4}},{"date":"2018-09-11T18:15:15Z","languages":{"java":18}}]},{"name":"MachineTesting","commits":[{"date":"2018-10-05T20:12:44Z","languages":{"python":0}},{"date":"2018-10-04T21:29:34Z","languages":{"python":10}},{"date":"2018-10-04T21:22:56Z","languages":{"python":36}},{"date":"2018-09-28T20:44:02Z","languages":{"python":0}},{"date":"2018-09-27T21:01:21Z","languages":{"python":30}},{"date":"2018-09-27T20:18:58Z","languages":{"python":7}},{"date":"2018-09-27T03:14:25Z","languages":{"python":75}},{"date":"2018-09-07T19:25:45Z","languages":{"javascript":3}},{"date":"2018-09-07T19:13:52Z","languages":{"javascript":22}},{"date":"2018-05-02T17:58:07Z","languages":{"python":3}},{"date":"2018-05-01T14:37:31Z","languages":{"javascript":226}}]},{"name":"NSERCUSRA2018","commits":[{"date":"2019-02-01T05:00:47Z","languages":{"python":0}}]},{"name":"RiotAPI","commits":[{"date":"2018-01-13T02:32:21Z","languages":{"javascript":19}}]},{"name":"Rosalind","commits":[{"date":"2018-01-15T21:37:59Z","languages":{"python":26}},{"date":"2018-01-15T19:25:58Z","languages":{"python":6}},{"date":"2018-01-13T03:24:38Z","languages":{"python":25}},{"date":"2018-01-13T02:21:01Z","languages":{"python":4}},{"date":"2018-01-13T01:25:44Z","languages":{"python":29}}]},{"name":"SnapCalender","commits":[{"date":"2017-01-22T16:34:43Z","languages":{"java":2}},{"date":"2017-01-22T15:52:36Z","languages":{"java":17}},{"date":"2017-01-22T08:23:03Z","languages":{"java":7}},{"date":"2017-01-22T06:35:46Z","languages":{"java":6}}]},{"name":"spark","commits":[]}]')

all_data = [json, json1, json2, json3, json4]
const languages = require('./models/languages');
const language_map = {
		"css": 0,
		"html": 1,
		"javascript": 2,
		"python": 3,
		"java" : 4,
		"c++" : 5,
		"c" : 6,
		"c#" : 7 
}

function get_user_pie(user_data){
	let languages = {};
	for (let repo of user_data){
		for (let commit of repo["commits"]){
				Object.keys(commit["languages"]).forEach(function(key,index) {
				if(key in languages){
					languages[key] += commit["languages"][key];
				} else{
					languages[key] = commit["languages"][key];
				}
			});
		}
	}
	return languages
}

function get_aggregate_pie(all_data, user_info){
	function get_kmeans_data(){
		let cleaned = []
		for(let user_data of all_data){
			user =  new Array(Object.keys(language_map).length).fill(0);
			if(JSON.stringify(user_data) === JSON.stringify(user_info)){
				cell = new Array(Object.keys(language_map).length).fill(0);
				user_info =  get_user_pie(user_info)
				total = 0
				for (var key in user_info) {
			    	total+= user_info[key];
				}
				for (var key in user_info){
					cell[language_map[key]] = user_info[key]/total
				}
				user_info = cell
			}
			total_lines = 0
			user_data = get_user_pie(user_data)
			for (var key in user_data) {
			    total_lines += user_data[key];
			}
			for (var key in user_data){
				user[language_map[key]] = user_data[key]/total_lines
			}
			cleaned.push(user)
		}
		return cleaned;
	}
	clusterMaker.k(2);
	clusterMaker.iterations(750);
	clusterMaker.data(get_kmeans_data());
	clusters = clusterMaker.clusters()
	for (i = 0; i <clusters.length; i++){
		for (point in clusters[i]["points"]){
			if(JSON.stringify(clusters[i]["points"][point]) === JSON.stringify(user_info)){
				values = clusters[i]["centroid"]
				keys = Object.keys(language_map)
				result = {}
				for(i = 0; i < values.length; i++){
					result[keys[i]] = values[i]
				}
				return result
			}
		}
	}
	
}


function get_all_bar(user_data){
	let repos = [];
	for (let repo of user_data){
		bar = {}
		bar["name"] = repo["name"]
		for (let commit of repo["commits"]){
			Object.keys(commit["languages"]).forEach(function(key,index) {
				if(key in bar){
					bar[key] += commit["languages"][key];
				} else{
					bar[key] = commit["languages"][key];
				}
			});
		}
		repos.push(bar)
	}
	return repos
}

function get_all_bar(user_data){
	let repos = [];
	for (let repo of user_data){
		bar = {}
		bar["name"] = repo["name"]
		total = 0
		for (let commit of repo["commits"]){
			
			Object.keys(commit["languages"]).forEach(function(key,index) {
				if(key in bar){
					bar[key] += commit["languages"][key];
				} else{
					bar[key] = commit["languages"][key];
				}
				total += commit["languages"][key];
			});
			bar["total"] = total

		}
		repos.push(bar)
	}
	repos.sort((a, b) => b.total - a.total);
	return repos.slice(0, 5)
}

function get_bar(get_all_bar){
	//iterate through all bars to get languages
	lang = new Set()
	for (key in get_all_bar){
		for(language in get_all_bar[key]){
			lang.add(language)
		}
	}
	lang.delete("total")
	console.log(lang)
	repos = []
	lang = Array.from(lang)
	repos.push(lang)
	//Expand all data to same size
	for (key in get_all_bar){
		repo = {}
		
		for(i = 0; i < lang.length; i++){
			language = lang[i]
			if(language in get_all_bar[key]){
				repo[language] = get_all_bar[key][language]
			} else{
				repo[language] = 0
			}
		
		}
		repos.push(repo)
	}
	return repos
}

function cleaned_data(user){
	values = get_user_pie(user)
	langs = []
	for(key in values){
		tmp = {}
		tmp.label = key
		tmp.value = values[key]
		tmp.color = color_map[key]
		langs.push(tmp)
	}
	return langs
}

function get_ml(all_users, user){
	return cleaned_data(get_aggregate_pie(all_users, user))
}
//console.log(get_aggregate_pie(all_data, all_data[4]))

module.exports = {
	cleaned_data,
	get_ml
}