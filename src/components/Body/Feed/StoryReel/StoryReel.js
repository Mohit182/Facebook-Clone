import React from "react";
import Story from "../Story/Story";
import "./StoryReel.css";
import krina from './krina.jpeg';
import gautam from './gautam.jpeg';
import kartikeya from './kartikeya.jpeg';
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://media-exp1.licdn.com/dms/image/C5603AQHNhBCBXUVv6A/profile-displayphoto-shrink_400_400/0/1626243167444?e=1647475200&v=beta&t=l5tuMDmVwAkgjzTi194cwv3Jo6gSJGVGkX1zbOvsRk0"
        profileSrc="https://media-exp1.licdn.com/dms/image/C5603AQHNhBCBXUVv6A/profile-displayphoto-shrink_400_400/0/1626243167444?e=1647475200&v=beta&t=l5tuMDmVwAkgjzTi194cwv3Jo6gSJGVGkX1zbOvsRk0"
        title='Mohit Gupta'
      />
      <Story
        image={krina}
        profileSrc="https://media-exp1.licdn.com/dms/image/C4E03AQGCrupP-vdlng/profile-displayphoto-shrink_100_100/0/1613165645338?e=1647475200&v=beta&t=y7H3NfOvXORZ7Da-3jd-cdaxivk69nFYPD0PQmgnWv8"
        title="Krina Sheth"
      />
      <Story
        image={gautam}
        profileSrc="https://scontent-del1-2.xx.fbcdn.net/v/t1.6435-9/78565353_1444672845708321_5272824194160132096_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0y7Qm6WmsQUAX8RbhNG&_nc_oc=AQmjpybJl5JmIE3FOFcuPDvv1ryaH8vR5MNYGZAdjRmfWHLWzj90fyR2ZryD4xe5teCTD1ycdBY7FCNcf6wzcWUU&_nc_ht=scontent-del1-2.xx&oh=00_AT8utVunzQg5O66CCCQVyNw2uKw4SvjW1ESObjUWYRBv3Q&oe=62021854"
        title='Gautam Meena'
      />
      <Story
        image={kartikeya}
        profileSrc="https://scontent-del1-2.xx.fbcdn.net/v/t1.6435-1/p320x320/121824315_1228744144174598_588306198907780748_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=c_ERWcvbHMUAX8hVK4-&_nc_ht=scontent-del1-2.xx&oh=00_AT_go3eikok8INu3m1gNCufasaTjbaG8buhoPtF6zn0cTg&oe=620198D3"
        title='Kartikeya Kamal'
      />
      <Story
        image="https://scontent-del1-2.xx.fbcdn.net/v/t1.18169-9/p843x403/1935221_988826297877498_1405997352189749246_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=17rcrhO8nZ0AX97frFH&_nc_ht=scontent-del1-2.xx&oh=00_AT_G6iJAYdkEGhShwhRIX40n3Ws6CB45LbdFKZjEV9bcKw&oe=62035226"
        profileSrc="https://media-exp1.licdn.com/dms/image/C4E03AQEFvlPKb-Y8Nw/profile-displayphoto-shrink_100_100/0/1627477561256?e=1647475200&v=beta&t=0BV4vAtKygVnO5Y1iw-Ee-DtgtBiDXOM7CNobc-857I"
        title='Aayush Bansal'
      />

    </div>
  );
}

export default StoryReel;
