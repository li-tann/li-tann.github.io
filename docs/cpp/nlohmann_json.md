# nlohmann::json

[JSON for Modern C++](https://github.com/nlohmann/json)，![starts](https://img.shields.io/github/stars/nlohmann/json.svg)，详细的说明可前往github学习使用。

## Json文件类型

Json文件分为Json和Ordered_Json, 其中Ordered_Json的存储顺序与填写顺序一致, 而默认的Json则是按照字母顺序排序

## Json数据类型

Object, Array, String, Number, Bool

## 写Json

code:

```c++
nlohmann::json j;
j["part1"]["section1_string"] = "this is string";
j["part1"]["section2_number"] = 3.1415926;
j["part2"]["section1_array_number"] = {1,2,3,4};
j["part2"]["section2_array_string"] = {"str1","str2","str3"};

std::ofstream ofs("./path.json");
if(!ofs.is_open()){
    return false;
}
/// 控制缩进
ofs<<j.dump(4);
ofs.close();
```

输出结果(大概吧，毕竟不是通过代码生成的json...):

```json
{
    "part1":{
        "section1_string":"this is string",
        "section2_number":3.1415926
    },
    "part2":{
        "section1_array_number":[
            1,
            2,
            3,
            4
        ],
        "section2_array_string":[
            "str1",
            "str2",
            "str3"
        ]
    }
}
```

## 读Json

以上面的json文件为例，读取该文件

```c++
std::ifstream ifs("path.json");
    if (!ifs.is_open()) {
        return false;
    }
    nlohmann::json j = nlohmann::json::parse(ifs);
    /// 如果对读取的json顺序有要求：
    nlohmann::ordered_json oj = nlohmann::json::parse(ifs);
    ifs.close();

    
```

## 读取Json并写入QTreeWidget

.h

```c++
void print_json(nlohmann::ordered_json json);
void json_to_item(nlohmann::ordered_json& json, std::string json_key, QTreeWidgetItem* item);
```

.cpp

```c++
void QTreeWidget_Json::print_json(nlohmann::ordered_json json)
{
    for (nlohmann::ordered_json::iterator iter = json.begin();
    iter != json.end();
    ++iter) {
        QTreeWidgetItem* item = new QTreeWidgetItem(this);
        this->json_to_item(iter.value(), iter.key(), item);
    }
}

void QTreeWidget_Json::json_to_item(nlohmann::ordered_json& json, std::string json_key, QTreeWidgetItem* item)
{
    for (auto key : m_jsonKey_filter) {
        if (key == json_key) {
            delete[] item;
            return;
        }
    }
    if (json.is_object()) {
        item->setText(0, json_key.c_str());
        item->setToolTip(0, item->text(0));
        for (nlohmann::ordered_json::iterator iter = json.begin();
            iter != json.end();
            ++iter) {
            QTreeWidgetItem* new_item = new QTreeWidgetItem(item);
            json_to_item(iter.value(), iter.key(), new_item);
        }
    }
    else if (json.is_array()) {
        std::string str = "";
        for (nlohmann::ordered_json::iterator it = json.begin(); it != json.end(); ++it) {
            if ((*it).is_number()) {
                str += fmt::format("{},", (*it).get<double>());
            }
            else if ((*it).is_string()) {
                str += fmt::format("{},", *it);
            }
            
        }
        item->setText(0, json_key.c_str());
        item->setText(1, str.c_str());
        item->setToolTip(0, item->text(0));
        item->setToolTip(1, item->text(1));
    }
    else if (json.is_string()) {
        std::string str = fmt::format("{}", json);
        item->setText(0, json_key.c_str());
        item->setText(1, str.c_str());
        item->setToolTip(0, item->text(0));
        item->setToolTip(1, item->text(1));
        //item->setFlags(item->flags() | Qt::ItemIsEditable);
    }
    else if (json.is_number()) {
        //if(json.is_number_float())
        std::string str = fmt::format("{}", json.get<double>());
        item->setText(0, json_key.c_str());
        item->setText(1, str.c_str());
        item->setToolTip(0, item->text(0));
        item->setToolTip(1, item->text(1));
    }
    else if (json.is_boolean()) {
        std::string str =  json ? "true" : "false";
        item->setText(0, json_key.c_str());
        item->setText(1, str.c_str());
        item->setToolTip(0, item->text(0));
        item->setToolTip(1, item->text(1));
    }
    else {
        return;
    }
    return;
}
```
