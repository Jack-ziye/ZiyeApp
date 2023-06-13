import "@/styles/index.scss";
import { Button, Space, Divider } from "antd";
import { HomeOutlined, GithubOutlined } from "@ant-design/icons";

const HeaderCard = () => {
  return (
    <div className="header_card">
      <div className="left_card">
        <div className="left_title">
          <div className="title">叶子起点</div>
          <div className="subtitle">网上报名后台管理系统</div>
        </div>
        <Space className="other">
          <Button type="primary" icon={<HomeOutlined />} ghost href="http://www.aiziye.cn" target="_blank">
            官网
          </Button>
          <Button icon={<GithubOutlined />} href="https://github.com/Jack-ziye" target="_blank">
            Github
          </Button>
        </Space>
      </div>
      <div className="rigth_card">
        <div className="title">技术选型</div>
        <div className="rigth_info_card">
          <div className="item_card">
            <div className="item_title">前端技术</div>
            <div className="item_content">React</div>
            <div className="item_content">React-router-dom</div>
            <div className="item_content">Mobx</div>
            <div className="item_content">Axios</div>
            <div className="item_content">Antd</div>
            <div className="item_content">Sass</div>
            <div className="item_content">...</div>
          </div>
          <div className="item_card">
            <div className="item_title">后端技术</div>
            <div className="item_content">SpringBoot</div>
            <div className="item_content">Shiro</div>
            <div className="item_content">JWT</div>
            <div className="item_content">MyBatis</div>
            <div className="item_content">Fastjson</div>
            <div className="item_content">EasyExcel</div>
            <div className="item_content">...</div>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

function Index() {
  return (
    <div className="index-wrapper">
      <HeaderCard />
    </div>
  );
}

export default Index;
