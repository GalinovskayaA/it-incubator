import React, {ChangeEvent, useState} from "react";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import style from "./HW4.module.css";
import s from "../../p1-main/m1-ui/u1-app/App.module.css";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";

function HW4() {
    const [text, setText] = useState<string>("");
    const error = text ? "" : "error";
    const red = !text;
    const showAlert = () => {
        if (error) {
            alert("введите текст...");
        } else {
            alert(text); // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

    return (
        <div className={s.content}>
            <div className={s.HW}>
                <h4>homeworks 4</h4>

                <div className={style.column}>
                    {/*should work (должно работать)*/}
                    <SuperInputText
                        className={style.blue}
                        value={text}
                        onChangeText={setText}
                        onEnter={showAlert}
                        error={error}
                        // className={s.blue} // проверьте, рабоет ли смешивание классов
                    />

                    {/*should work (должно работать)*/}
                    <SuperButton
                        className={style.button}
                        red={red} // пропсу с булевым значением не обязательно указывать true
                        onClick={showAlert}
                    >
                        delete {/*// название кнопки попадёт в children*/}
                    </SuperButton>

                    {/*should work (должно работать)*/}
                    <SuperCheckbox
                        checked={checked}
                        onChangeChecked={setChecked}
                    >
                        some text {/*// этот текст попадёт в children*/}
                    </SuperCheckbox>

                    {/*// onChange тоже должен работать*/}
                    <SuperCheckbox
                        checked={checked}
                        onChange={testOnChange}
                    >
                        {text}
                    </SuperCheckbox>
                </div>
            </div>


        </div>
    );
}

export default HW4;
