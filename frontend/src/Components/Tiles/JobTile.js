import RegularSkillTag from "../Tag/RegularSkillTag";



function Jobtile({title,difficulty,postTime,budgetType,description,amount,tags,proposalCount,likes,bookmarks}) {

    let mapTags = () => { 
        return tags.map((val,index) => {
            return <div key={index} className="mb-5 sm:mr-5 sm:mb-0"><RegularSkillTag text={val} /></div>
        })
    }

    let difficultyCheck = () => {
        if(difficulty === 'low'){
            return 'Entry Level';
        }
        else if(difficulty === 'Intermediate'){
            return 'Intermediate';
        }
        return 'Expert';
    }

    let extractDateTime = () => {
       let date = postTime.slice(0,10);
       return date;
    }

    let ImageCheck = () => {
        if(difficulty === 'Low'){
            return <img className="mb-1" src="/difficulty green.svg" alt="" />;
        }
        else if(difficulty === 'Intermediate'){
            return <img className="mb-1" src="/difficulty yellow.svg" alt="" />;
        }
        return <img className="mb-1" src="/difficulty red.svg" alt="" />;
    }

    return ( 
        <div className="rounded-xl px-11 py-14 bg-aamdanDeepBlack mb-14">
                <h1 className="text-3xl font-bold mb-4">{title}</h1>
                <p className="text-lightGray mb-10">{budgetType.toUpperCase()} - {difficultyCheck()} - Posted {extractDateTime()}</p>
                <p className="mb-10">{description}</p>
                <div className="flex mb-5 flex-col sm:flex-row">
                    <p className="text-xl mr-12 mb-5">Estimated Budget: ${amount}</p>
                    <div className="flex ">
                        <p className="text-lightGray mr-8">Difficulty:</p>
                        <div className="flex flex-col justify-center items-center">
                            {ImageCheck()}
                            <p className="text-xs font-bold">{difficulty}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-lightGray mb-5">Tags:</p>
                    <div className="flex flex-col sm:flex-row mb-5">
                        {mapTags()}
                    </div>
                </div>
                <div className="flex justify-between">
                    <p>Proposal: <span className="font-bold">{proposalCount}</span></p>
                    <div className="flex">
                        <div className="flex flex-col items-center mr-5">
                            <img src="/Facebook Like.svg" alt="" />
                            <p className="text-xs">{likes}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/Bookmark.svg" alt="" />
                            <p className="text-xs">{bookmarks}</p>
                        </div>
                    </div>
                </div>
            </div>
     );
}

export default Jobtile;