 <template>
  <el-timeline>
    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>1952年</h4>
          <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
            校史开始，“西南建筑工程学校”和西南工业部新办的“重庆第一土木建筑学校”这两所在1952年建立的学校
          </el-button>
<!--        <p>Tom committed 2018/4/12 20:46</p>-->
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>1953年</h4>
        <el-button type="primary" style="margin-left: 16px" @click="drawer1 = true">
          由中央建筑工程部决定将“西南建筑工程学校”和“重庆第一土木建筑学校”合并建立“重庆建筑工程学校“
        </el-button>
<!--        <p>Tom committed 2018/4/3 20:46</p>-->
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>1956年</h4>
        <el-button type="primary" style="margin-left: 16px" @click="drawer2 = true">
          国家建筑材料工业部成立
        </el-button>
        <!--        <p>Tom committed 2018/4/3 20:46</p>-->
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>1958年</h4>
        <el-button type="primary" style="margin-left: 16px" @click="drawer3 = true">
          校名更为“重庆建筑材料工业专科学校”
        </el-button>
        <!--        <p>Tom committed 2018/4/3 20:46</p>-->
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>1959年</h4>
        <el-button type="primary" style="margin-left: 16px" @click="drawer4 = true">
          部教育局来电指示学校“今后向非金属采矿单科性学校发展”，决定撤销了硅酸盐专业。
        </el-button>
        <!--        <p>Tom committed 2018/4/3 20:46</p>-->
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>1960年</h4>
        <el-button type="primary" style="margin-left: 16px" @click="drawer5 = true">
          部教育局来电指示学校办成矿业学院，招收了采矿专业大学本科生60人。
        </el-button>
        <!--        <p>Tom committed 2018/4/3 20:46</p>-->
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>1962年</h4>
        <el-button type="primary" style="margin-left: 16px" @click="drawer6 = true">
          我校更名为"重庆建筑材料工业学校"
        </el-button>
        <!--        <p>Tom committed 2018/4/3 20:46</p>-->
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>1964年</h4>
        <el-button type="primary" style="margin-left: 16px" @click="drawer7 = true">
          建工部决定我校与徐州技校合并迁往石棉县，改为半工半读类学校。
        </el-button>
        <!--        <p>Tom committed 2018/4/3 20:46</p>-->
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>1965年</h4>
        <el-button type="primary" style="margin-left: 16px" @click="drawer20 = true">
          建材部
        </el-button>
        <!--        <p>Tom committed 2018/4/3 20:46</p>-->
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>1966年</h4>
        <el-button type="primary" style="margin-left: 16px" @click="drawer9 = true">
          按照建材部指示更名为“建筑材料工业部四川非金属矿山半工半读中等技术学校”（因校名太长，后被简称为“四川矿校”）
        </el-button>
        <!--        <p>Tom committed 2018/4/3 20:46</p>-->
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>1973年</h4>
        <el-button type="primary" style="margin-left: 16px" @click="drawer10 = true">
          结束了学校多年曲折起伏发展困境
        </el-button>
        <!--        <p>Tom committed 2018/4/3 20:46</p>-->
      </el-card>
    </el-timeline-item>

    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>1974年</h4>
        <el-button type="primary" style="margin-left: 16px" @click="drawer11 = true">
          搬到绵阳城东的一处建筑公司旧址建校
        </el-button>
        <!--        <p>Tom committed 2018/4/12 20:46</p>-->
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>1975年</h4>
        <el-button type="primary" style="margin-left: 16px" @click="drawer12 = true">
          更名为四川建筑材料工业学校，进入了稳定发展阶段。
        </el-button>
        <!--        <p>Tom committed 2018/4/12 20:46</p>-->
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>1978年</h4>
        <el-button type="primary" style="margin-left: 16px" @click="drawer13 = true">
          我校升格为四川建筑材料工业学院，正式开始了本科教育历程。
        </el-button>
        <!--        <p>Tom committed 2018/4/12 20:46</p>-->
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>1979年</h4>
        <el-button type="primary" style="margin-left: 16px" @click="drawer14 = true">
          学校主体迁往清华大学绵阳分校校址，即现在西南科技大学本部西区
        </el-button>
        <!--        <p>Tom committed 2018/4/12 20:46</p>-->
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>1992年</h4>
        <el-button type="primary" style="margin-left: 16px" @click="drawer15 = true">
          1992年举办了40周年校庆
        </el-button>
        <!--        <p>Tom committed 2018/4/12 20:46</p>-->
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>1993年</h4>
        <el-button type="primary" style="margin-left: 16px" @click="drawer16 = true">
          国家教委批准四川建筑材料工业学院改变领导管理体制并更名为西南工学院。
        </el-button>
        <!--        <p>Tom committed 2018/4/12 20:46</p>-->
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>1998年</h4>
        <el-button type="primary" style="margin-left: 16px" @click="drawer17 = true">
          西南工学院成为四川省管为主的学校，并由分管高校的副省长任学校董事会董事长。
        </el-button>
        <!--        <p>Tom committed 2018/4/12 20:46</p>-->
      </el-card>
    </el-timeline-item>

    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>2000年</h4>
        <el-button type="primary" style="margin-left: 16px" @click="drawer18 = true">
          西南工学院成为四川省管为主的学校，并由分管高校的副省长任学校董事会董事长。
        </el-button>
        <!--        <p>Tom committed 2018/4/12 20:46</p>-->
      </el-card>
    </el-timeline-item>

    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>2017年</h4>
        <el-button type="primary" style="margin-left: 16px" @click="drawer19 = true">
          杨振宁作客西南科大畅谈学习与研究
        </el-button>
        <!--        <p>Tom committed 2018/4/12 20:46</p>-->
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="" placement="top" size="large" color="rgb" hollow=true style="font-size: 30px">
      <el-card>
        <h4>2017年</h4>
        <el-button type="primary" style="margin-left: 16px" @click="drawer20 = true">
          西南科技大学建校70周年
        </el-button>
        <!--        <p>Tom committed 2018/4/12 20:46</p>-->
      </el-card>
    </el-timeline-item>
  </el-timeline>




<!--  <el-button type="primary" style="margin-left: 16px" @click="drawer = true">-->
<!--    open-->
<!--  </el-button>-->

<!--  <el-drawer v-model="drawer" title="I am the title" :with-header="false">-->
<!--    <span>Hi there爽歪歪!</span>-->
<!--  </el-drawer>-->
  <el-drawer v-model="drawer" title="I am the title" :with-header="false" size="85%" direction="btt" style="background-image: url(src/assets/icon70.png);background-size: 1500px;background-repeat: no-repeat;background-position-x: 400px">
    <span style="color: #181818;font-size: 20px;">经研究确认，江津窑业学校不是我校的起始学校<br>
      ，而是曾并入我校真正前身之一的西南建筑工程学校，且因不合符当时全<br>
      国院系调整组建单一学科专业类学校的原则，仅半年时间就成建制分出，<br>
      后来又并入了北京化工学校。江津窑业学校既没有在我校招生，更没有在<br>
      我校的毕业生，对我校教育工作和学校发展进程没有产生过什么影响和贡<br>
      献，只是在我校参与全国第一次院系调整中的一段故事，不能算做校史的<br>
      一条根系，更非原始史根。因此，学校领导集体根据史实，正式认定我校<br>
      校史起始于1952年9月.国家根据全国建设发展需求，决定进行全国院系<br>
      统一大调整，建立各种专门学科专业的高校和中等专科学校。我校就是由<br>
      西南军政委员会财经委员会建筑工程管理局创办的“西南建筑工程学校”和<br>
      西南工业部新办的“重庆第一土木建筑学校”这两所在1952年建立的学校。</span>
  </el-drawer>

  <el-drawer v-model="drawer1" title="I am the title" :with-header="false" size="85%" direction="btt" style="background-image: url(src/assets/icon70.png);background-size: 1500px;background-repeat: no-repeat;background-position-x: 400px">
    <span style="color: #181818;font-size: 20px">
      1953年春，由中央建筑工程部决定将上述两所学校合并建立“重庆建筑工<br>
      程学校“而发展起来的。新校址选在重庆市教育文化区沙坪坝。学校受建<br>
      工部和高教部中等技术教育司领导，开创了我校初始阶段的辉煌历程。</span>
  </el-drawer>

  <el-drawer v-model="drawer2" title="I am the title" :with-header="false" size="85%" direction="btt" style="background-image: url(src/assets/icon70.png);background-size: 1500px;background-repeat: no-repeat;background-position-x: 400px">
    <span style="color: #181818;font-size: 20px">1956年成立国家建筑材料工业部</span>
  </el-drawer>

  <el-drawer v-model="drawer3" title="I am the title" :with-header="false" size="85%" direction="btt" style="background-image: url(src/assets/icon70.png);background-size: 1500px;background-repeat: no-repeat;background-position-x: 400px">
    <span style="color: #181818;font-size: 20px">
      1958年10月，建工部教育局通知学校：“部决定将你校任务改为培养建<br>
      筑材料工业干部的高等学校。校名为“重庆建筑材料工业专科学校”。</span>
  </el-drawer>


  <el-drawer v-model="drawer4" title="I am the title" :with-header="false" size="85%" direction="btt" style="background-image: url(src/assets/icon70.png);background-size: 1500px;background-repeat: no-repeat;background-position-x: 400px">
    <span style="color: #181818;font-size: 20px">
      1958年，学校曾招收了硅酸盐专业学生，但次年7月，部教育局来电指<br>
      示学校“今后向非金属采矿单科性学校发展”，决定撤销了硅酸盐专业。
    </span>
  </el-drawer>

  <el-drawer v-model="drawer5" title="I am the title" :with-header="false" size="85%" direction="btt" style="background-image: url(src/assets/icon70.png);background-size: 1500px;background-repeat: no-repeat;background-position-x: 400px">
    <span style="color: #181818;font-size: 20px">
      1960年教育部又指示学校办成矿业学院。学校此前在1959年夏，按建<br>
      工部规定，已招收了采矿专业大学本科生60人。在1960—1961年度，<br>
      学校招收了非金属矿床开采、非金属地质勘探、非金属矿山机电、石棉<br>
      与石棉制品四个专业的5年制大专生。但采矿专业大学本科生很快又按<br>
      建工部教育局指示转往北京建材工业学院。1960年，根据四川省高教局<br>
      关于大中专教育压缩意见：“凡1960年内新办的5年一贯制专科一律撤销”。<br>
      我校5年一贯制专科一律改为4年制中专，专业包括地勘、采矿、石棉制品、<br>
      机电、硅酸盐工程。</span>
  </el-drawer>

  <el-drawer v-model="drawer6" title="I am the title" :with-header="false" size="85%" direction="btt" style="background-image: url(src/assets/icon70.png);background-size: 1500px;background-repeat: no-repeat;background-position-x: 400px">
    <span style="color: #181818;font-size: 20px">
      1962年，建工部发出“关于部属中专学校更改校名的通知”，我校更名<br>
      为重庆建筑材料工业学校。</span>
  </el-drawer>

  <el-drawer v-model="drawer7" title="I am the title" :with-header="false" size="85%" direction="btt" style="background-image: url(src/assets/icon70.png);background-size: 1500px;background-repeat: no-repeat;background-position-x: 400px">
    <span style="color: #181818;font-size: 20px">
      1964年11月，建工部决定我校与徐州技校合并迁往石棉县，改为半工<br>
      半读类学校。由于徐州技校坚决抵制和1965年4月建工和建材两部分开，<br>
      建材部教育处不同意我校迁石棉县，并于当年6月1日来文通知“你校迁校<br>
      问题，今年暂不动，明年是否迁往石棉，待下半年再研究决定。”故搬迁<br>
      石棉指令并未落实
      </span>
  </el-drawer>

  <el-drawer v-model="drawer9" title="I am the title" :with-header="false" size="85%" direction="btt" style="background-image: url(src/assets/icon70.png);background-size: 1500px;background-repeat: no-repeat;background-position-x: 400px">
    <span style="color: #181818;font-size: 20px">
      1966年3月基本搬迁完成。到石棉后，按照建材部指示更名为“建筑材<br>
      料工业部四川非金属矿山半工半读中等技术学校”（因校名太长，后被<br>
      简称为“四川矿校”），并于1966年2月4日正式启用了新校名及印章<br>
      （据“四川建材学院校史”p.124）决定搬迁石棉，试行半工半读教育。<br>
      学校应于明年二月搬迁完毕。”这时，学校也才正式动员全校师生开展迁<br>
      校工作
    </span>
  </el-drawer>

  <el-drawer v-model="drawer10" title="I am the title" :with-header="false" size="85%" direction="btt" style="background-image: url(src/assets/icon70.png);background-size: 1500px;background-repeat: no-repeat;background-position-x: 400px">
    <span style="color: #181818;font-size: 20px">
      1973年底，终于结束了学校多年曲折起伏发展困境。教职工们在学校<br>
      党委领导下，经受住了在石棉8年艰难环境的锤炼，大家忠诚教育事业，<br>
      艰苦奋斗，砥砺前行。争得了上级支持.
    </span>
  </el-drawer>

  <el-drawer v-model="drawer11" title="I am the title" :with-header="false" size="85%" direction="btt" style="background-image: url(src/assets/icon70.png);background-size: 1500px;background-repeat: no-repeat;background-position-x: 400px">
    <span style="color: #181818;font-size: 20px">1974年春搬到绵阳城东的一处建筑公司旧址建校</span>
  </el-drawer>

  <el-drawer v-model="drawer12" title="I am the title" :with-header="false" size="85%" direction="btt" style="background-image: url(src/assets/icon70.png);background-size: 1500px;background-repeat: no-repeat;background-position-x: 400px">
    <span style="color: #181818;font-size: 20px">1975年5月7日更名为四川建筑材料工业学校，进入了稳定发展阶段。</span>
  </el-drawer>

  <el-drawer v-model="drawer13" title="I am the title" :with-header="false" size="85%" direction="btt" style="background-image: url(src/assets/icon70.png);background-size: 1500px;background-repeat: no-repeat;background-position-x: 400px">
    <span style="color: #181818;font-size: 20px">
      1978年我校升格为四川建筑材料工业学院，正式开始了本科教育历程。<br>
      当年年底，清华大学绵阳分校迁回北京本部。经国家建材局与四川省政<br>
      府协商，以国家建材局购买方式将清华大学绵阳分校校址交予四川建材<br>
      工业学院使用。</span>
  </el-drawer>

  <el-drawer v-model="drawer14" title="I am the title" :with-header="false" size="85%" direction="btt" style="background-image: url(src/assets/icon70.png);background-size: 1500px;background-repeat: no-repeat;background-position-x: 400px">
    <span style="color: #181818">
      1979年春，学校主体迁往清华大学绵阳分校校址，<br>
      即现在西南科技大学本部西区。
    </span>
  </el-drawer>

  <el-drawer v-model="drawer15" title="I am the title" :with-header="false" size="85%" direction="btt" style="background-image: url(src/assets/icon70.png);background-size: 1500px;background-repeat: no-repeat;background-position-x: 400px">
    <span style="color: #181818;font-size: 20px">1992年举办了40周年校庆</span>
  </el-drawer>

  <el-drawer v-model="drawer16" title="I am the title" :with-header="false" size="85%" direction="btt" style="background-image: url(src/assets/icon70.png);background-size: 1500px;background-repeat: no-repeat;background-position-x: 400px">
    <span style="color: #181818;font-size: 20px">
      1993年8月，国家教委批准四川建筑材料工业学院改变领导管理体制并<br>
      更名为西南工学院。同意实行联合办学后的西南工学院由国家建材局和<br>
      绵阳市政府共同领导，以国家建材局为主，与有关大型企事业单位组成<br>
      校董事会参与管理。西南工学院董事会随即正式成立。</span>
  </el-drawer>

  <el-drawer v-model="drawer17" title="I am the title" :with-header="false" size="85%" direction="btt" style="background-image: url(src/assets/icon70.png);background-size: 1500px;background-repeat: no-repeat;background-position-x: 400px">
    <span style="color: #181818;font-size: 20px">
      1998年，国家决定对81所部属高校实行中央部门与地方共管，以省管为<br>
      主的办学体制。西南工学院成为四川省管为主的学校，并由分管高校的副<br>
      省长任学校董事会董事长。当年12月末，绵阳市委决定将绵阳纺织、丝绸<br>
      两所中级技校并入西南工学院的成人教育学院。</span>
  </el-drawer>

  <el-drawer v-model="drawer18" title="I am the title" :with-header="false" size="85%" direction="btt" style="background-image: url(src/assets/icon70.png);background-size: 1500px;background-repeat: no-repeat;background-position-x: 400px">
    <span style="color: #181818;font-size: 20px">
      2000年，西南工学院抓住中国（绵阳）科技城建设正式启动的历史机遇<br>
      ，与绵阳经济技术高等专科学校合并组建了西南科技大学。成立了西南科<br>
      技大学董事会。我校驶入了规模-结构-质量-效益协调发展的快车道。接<br>
      着开始了建设特色鲜明高水平大学的新征程，书写着学校快速持续发展的<br>
      辉煌新篇章。</span>
  </el-drawer>
  <el-drawer v-model="drawer19" title="I am the title" :with-header="false" size="85%" direction="btt" style="background-image: url(src/assets/icon70.png);background-size: 1500px;background-repeat: no-repeat;background-position-x: 400px">
    <span style="color: #181818;font-size: 20px">
      著名物理学家、诺贝尔奖得主、中国科学院院士杨振宁，中国工程院院士<br>
      胡思得和中国科学院院士江松亲临我校，为西南科大师生带来了一场空前<br>
      的精神盛宴。这是学校学术报告厅迎来的最激动人心的一次演讲。杨振宁<br>
      院士的报告会，定于下午3点50开始，但两点不到，报告厅外已排起了长<br>
      龙。600余个座位，全部实名制，一人一票一座。有票的欣喜若狂，没有<br>
      票的各种“软磨硬泡”后只得在报告厅外等候，一睹院士风采。下午3点整，<br>
      报告厅的几条过道已是“一站难求”。报告厅内的大屏幕上，播放着杨振宁先<br>
      生的纪录片，他在讲述“物理之美与艺术之美”，观众已经看得津津有味。3<br>
      点半后，观众们开始紧盯门口，翘首以盼。3点50分，当校党委书记庄天慧<br>
      与校长陈永灿陪同95岁高龄的杨振宁院士步入报告厅时，没有任何人示意，<br>
      全体起立，热烈鼓掌。</span>
  </el-drawer>
  <el-drawer v-model="drawer20" title="I am the title" :with-header="false" size="85%" direction="btt" style="background-image: url(src/assets/icon70.png);background-size: 1500px;background-repeat: no-repeat;background-position-x: 400px">
    <span style="color: #181818;font-size: 20px">
      七十载铸就辉煌，新时代共创未来。70周年校庆是西南科技大学总结办学<br>
      经验、展示办学成果、弘扬学校精神、汇聚各方力量、激励师生奋进、推<br>
      进高质量发展的重要契机。校庆期间，学校将以线上线下结合、线上为主<br>
      的活动形式，举办庆祝建校70周年暨高质量发展大会、庆祝建校70周年文<br>
      艺晚会、董事会工作会议；启用校史馆和举办建校70周年办学成果展、联<br>
      合办学“四维共建”成果展等系列展览；举办力学与航空航天研究院揭牌仪<br>
      式、国科大成都学院战略合作协议签约仪式等会议及学术报告；举办建校<br>
      70周年校友代表大会暨校友高端论坛、校友单位专场招聘会等系列校友活<br>
      动（《西南科技大学庆祝建校70周年主要活动日程表》附后）。通过办一<br>
      个温暖而奋进的校庆，激发全体西南科大人团结一心，众志成城，为实现<br>
      学校的发展目标而努力奋斗。
    </span>
  </el-drawer>
</template>

<script lang="ts" setup>
import * as echarts from "echarts";
import { ref } from 'vue'
const drawer = ref(false)
const drawer1 = ref(false)
const drawer2 = ref(false)
const drawer3 = ref(false)
const drawer4 = ref(false)
const drawer5 = ref(false)
const drawer6 = ref(false)
const drawer7 = ref(false)
const drawer8 = ref(false)
const drawer9 = ref(false)
const drawer10 = ref(false)
const drawer11 = ref(false)
const drawer12 = ref(false)
const drawer13 = ref(false)
const drawer14 = ref(false)
const drawer15 = ref(false)
const drawer16 = ref(false)
const drawer17 = ref(false)
const drawer18 = ref(false)
const drawer19 = ref(false)
const drawer20 = ref(false)

// export default {
//   name: "HomePage",
// }


</script>

<style scoped>

</style>