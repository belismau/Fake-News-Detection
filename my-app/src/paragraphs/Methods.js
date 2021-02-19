import React from 'react';
import './Paragraphs.css';

class Methods extends React.Component {
    render() {
        return(
            <div className="Paragraph">
                <h2> 2. Metoder </h2>
                <p>
                    Praesent vel vestibulum lacus, a semper dolor. Sed congue faucibus nunc, 
                    ac molestie dui feugiat quis. Mauris tempus id sem egestas faucibus. 
                    Phasellus non urna mauris. Phasellus lobortis, tellus suscipit vestibulum 
                    elementum, dolor dolor feugiat neque, quis vulputate ligula lacus in arcu. 
                    Donec eget justo a enim ultricies dapibus. Fusce non semper odio, et 
                    elementum ante. Cras ut volutpat ante.

                    Nullam metus purus, semper eu suscipit at, rutrum at lorem. Pellentesque 
                    tempor lectus et dapibus hendrerit. Praesent a ultricies neque. Suspendisse 
                    vestibulum lacus sem, non&nbsp; 
                    <span className="Link">sollicitudin</span>
                    &nbsp;ex facilisis sit amet. Maecenas 
                    fermentum commodo justo, eu orci scelerisque cursus. Integer sit 
                    amet facilisis justo. Maecenas tempus tortor ante, quis tristique risus 
                    molestie sed. Suspendisse quis magna vel tellus molestie volutpat. Vivamus 
                    ornare mollis dignissim. Aenean posuere justo in ligula elementum, at 
                    aliquet metus tempus. Mauris egestas nibh arcu, ac tincidunt ex feugiat 
                    vel. Integer sed arcu sit amet sapien commodo maximus eu vitae augue.
                </p>

                <h2> 2.1. Logistisk Regression </h2>
                <p>
                    Mauris imperdiet nunc eros, eu fermentum magna consectetur vitae. Praesent 
                    iaculis urna pharetra est ullamcorper, sed semper elit lobortis. Sed at 
                    sapien ante. In sed diam ante. Morbi felis ex, ullamcorper vel accumsan eu, 
                    feugiat sed mauris. Suspendisse ut venenatis mauris. Vestibulum sit amet 
                    ullamcorper risus. Cras sit amet velit congue, eleifend lectus sit amet, 
                    congue orci. Suspendisse a dolor nisi. Phasellus hendrerit sollicitudin 
                    ultrices. In nec varius ex.
                </p>

                <img
                    className   =   "ContentPicture"
                    src         =   "../img/confusion_matrix.png"
                    alt         =   "Confusion Matrix"
                />

                <p> 
                    Sed at sapien ante. In sed diam ante. Morbi felis ex, ullamcorper 
                    vel accumsan eu, feugiat sed mauris. Suspendisse ut venenatis mauris. 
                    Vestibulum sit amet ullamcorper risus.
                </p>
            </div>
        )
    }
}

export default Methods;
