'use client';

import {useState} from "react";
import {Header} from "@/components/header/Header";
import {Category} from "@/components/category/Category";
import {Button} from "@/components/button/Button";
import styles from './index.scss';

export default function Home() {

    const [createNewItem, setCreateNewItem] = useState(false);

  return (
    <div>
      <Header/>
        <main>
            <div className="categories__container">
                <Button title="Create a Category" iconShown icon="/plus.svg" className="create-button" iconClassName="categories__create-icon" onClick={() => setCreateNewItem(true)}/>
                <Category isNewItem={createNewItem}/>
            </div>
            {createNewItem && <div className="buttons__container">
                <div className="buttons__wrapper">
                    <Button title="Save changes" iconShown icon="/check-circle.svg" className="buttons__save-button"
                            iconClassName="buttons__save-icon"/>
                    <Button title="Cancel" className="buttons__cancel-button" onClick={() => setCreateNewItem(false)}/>
                </div>
            </div>}
        </main>
    </div>
  )
}
