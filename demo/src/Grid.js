import { Link } from 'inferno-router'
import { MCGrid, MCGridCell } from '../../packages/micro-ui-grid/dist/'

export default function Grid() {
    return (
		<div class="page-grid">
            <p><Link to="/">Back to component list</Link></p>

            <h2>Grid</h2><hr />

            <div class="dn db-desktop">on desktop</div>
            <div class="dn db-tablet">on tablet</div>
            <div class="dn db-phone">on mobile</div>

            <div>
                <p>Responsive</p>

                <MCGrid>
                    <MCGridCell span="1" tablet-span="2" phone-span="12">
                        <div class="box-row dn db-desktop">1</div>
                        <div class="box-row dn db-tablet">2</div>
                        <div class="box-row dn db-phone">12</div>
                    </MCGridCell>

                    <MCGridCell span="10" tablet-span="8" phone-span="6">
                        <div class="box-row dn db-desktop">10</div>
                        <div class="box-row dn db-tablet">8</div>
                        <div class="box-row dn db-phone">6</div>
                    </MCGridCell>

                    <MCGridCell span="1" tablet-span="2" phone-span="6">
                        <div class="box-row dn db-desktop">1</div>
                        <div class="box-row dn db-tablet">2</div>
                        <div class="box-row dn db-phone">6</div>
                    </MCGridCell>

                    <MCGridCell span="2" tablet-span="3" phone-span="12">
                        <div class="box-row dn db-desktop">2</div>
                        <div class="box-row dn db-tablet">3</div>
                        <div class="box-row dn db-phone">12</div>
                    </MCGridCell>

                    <MCGridCell span="10" tablet-span="9" phone-span="12">
                        <div class="box-row dn db-desktop">10</div>
                        <div class="box-row dn db-tablet">9</div>
                        <div class="box-row dn db-phone">12</div>
                    </MCGridCell>

                    <MCGridCell span="8" tablet-span="6" phone-span="10">
                        <div class="box-row dn db-desktop">8</div>
                        <div class="box-row dn db-tablet">6</div>
                        <div class="box-row dn db-phone">10</div>
                    </MCGridCell>

                    <MCGridCell span="4" tablet-span="6" phone-span="2">
                        <div class="box-row dn db-desktop">4</div>
                        <div class="box-row dn db-tablet">6</div>
                        <div class="box-row dn db-phone">2</div>
                    </MCGridCell>
                </MCGrid>
            </div>

            <div>
                <p>Fluid</p>

                <MCGrid>
                    <MCGridCell>
                        <div class="box-row">12</div>
                    </MCGridCell>
                </MCGrid>

                <MCGrid>
                    <MCGridCell span="1">
                        <div class="box-row">1</div>
                    </MCGridCell>

                    <MCGridCell>
                        <div class="box-row">11</div>
                    </MCGridCell>
                </MCGrid>

                <MCGrid>
                    <MCGridCell span="2">
                        <div class="box-row">2</div>
                    </MCGridCell>

                    <MCGridCell>
                        <div class="box-row">10</div>
                    </MCGridCell>
                </MCGrid>

                <MCGrid>
                    <MCGridCell span="3">
                        <div class="box-row">3</div>
                    </MCGridCell>

                    <MCGridCell>
                        <div class="box-row">9</div>
                    </MCGridCell>
                </MCGrid>

                <MCGrid>
                    <MCGridCell span="4">
                        <div class="box-row">4</div>
                    </MCGridCell>

                    <MCGridCell>
                        <div class="box-row">8</div>
                    </MCGridCell>
                </MCGrid>

                <MCGrid>
                    <MCGridCell span="5">
                        <div class="box-row">5</div>
                    </MCGridCell>

                    <MCGridCell>
                        <div class="box-row">7</div>
                    </MCGridCell>
                </MCGrid>

                <MCGrid>
                    <MCGridCell span="6">
                        <div class="box-row">6</div>
                    </MCGridCell>

                    <MCGridCell>
                        <div class="box-row">6</div>
                    </MCGridCell>
                </MCGrid>
            </div>

            <div>
                <p>Offsets</p>

                <MCGrid>
                    <MCGridCell span="1" offset="11">
                        <div class="box-row">1</div>
                    </MCGridCell>

                    <MCGridCell span="2" offset="10">
                        <div class="box-row">2</div>
                    </MCGridCell>

                    <MCGridCell span="3" offset="9">
                        <div class="box-row">3</div>
                    </MCGridCell>

                    <MCGridCell span="4" offset="8">
                        <div class="box-row">4</div>
                    </MCGridCell>

                    <MCGridCell span="5" offset="7">
                        <div class="box-row">5</div>
                    </MCGridCell>

                    <MCGridCell span="6" offset="6">
                        <div class="box-row">6</div>
                    </MCGridCell>

                    <MCGridCell span="7" offset="5">
                        <div class="box-row">7</div>
                    </MCGridCell>

                    <MCGridCell span="8" offset="4">
                        <div class="box-row">8</div>
                    </MCGridCell>

                    <MCGridCell span="9" offset="3">
                        <div class="box-row">9</div>
                    </MCGridCell>

                    <MCGridCell span="10" offset="2">
                        <div class="box-row">10</div>
                    </MCGridCell>

                    <MCGridCell span="11" offset="1">
                        <div class="box-row">11</div>
                    </MCGridCell>
                </MCGrid>
            </div>

            <div>
                <p>Auto Width</p>

                <MCGrid>
                    <MCGridCell>
                        <div class="box-row">1/2</div>
                    </MCGridCell>

                    <MCGridCell>
                        <div class="box-row">1/2</div>
                    </MCGridCell>
                </MCGrid>

                <MCGrid>
                    <MCGridCell>
                        <div class="box-row">1/3</div>
                    </MCGridCell>

                    <MCGridCell>
                        <div class="box-row">1/3</div>
                    </MCGridCell>

                    <MCGridCell>
                        <div class="box-row">1/3</div>
                    </MCGridCell>
                </MCGrid>
            </div>

            <div>
                <p>Nested Grids</p>

                <MCGrid>
                    <MCGridCell span="7">
                        <div class="box box-container">
                            <MCGrid>
                                <MCGridCell span="9">
                                    <div class="box-first box-container">
                                        <MCGrid>
                                            <MCGridCell span="4">
                                                <div class="box-nested"></div>
                                            </MCGridCell>

                                            <MCGridCell span="8">
                                                <div class="box-nested"></div>
                                            </MCGridCell>
                                        </MCGrid>
                                    </div>
                                </MCGridCell>

                                <MCGridCell span="3">
                                    <div class="box-first box-container">
                                        <MCGrid>
                                            <MCGridCell>
                                                <div class="box-nested"></div>
                                            </MCGridCell>
                                        </MCGrid>
                                    </div>
                                </MCGridCell>
                            </MCGrid>
                        </div>
                    </MCGridCell>

                    <MCGridCell span="5">
                        <div class="box box-container">
                            <MCGrid>
                                <MCGridCell>
                                    <div class="box-first box-container">
                                        <MCGrid>
                                            <MCGridCell span="6">
                                                <div class="box-nested"></div>
                                            </MCGridCell>

                                            <MCGridCell span="6">
                                                <div class="box-nested"></div>
                                            </MCGridCell>
                                        </MCGrid>
                                    </div>
                                </MCGridCell>
                            </MCGrid>
                        </div>
                    </MCGridCell>
                </MCGrid>
            </div>

            <div>
                <p>Alignment</p>

                <MCGrid>
                    <MCGridCell>
                        <div class="box box-container">
                            <MCGrid align="left" tablet-align="right" phone-align="center">
                                <MCGridCell span="6">
                                    <div class="box-nested dn db-desktop">left</div>
                                    <div class="box-nested dn db-tablet">right</div>
                                    <div class="box-nested dn db-phone">center</div>
                                </MCGridCell>
                            </MCGrid>
                        </div>
                    </MCGridCell>
                </MCGrid>

                <MCGrid>
                    <MCGridCell>
                        <div class="box box-container">
                            <MCGrid align="center">
                                <MCGridCell span="6">
                                    <div class="box-nested">center</div>
                                </MCGridCell>
                            </MCGrid>
                        </div>
                    </MCGridCell>
                </MCGrid>

                <MCGrid>
                    <MCGridCell>
                        <div class="box box-container">
                            <MCGrid align="right">
                                <MCGridCell span="6">
                                    <div class="box-nested">right</div>
                                </MCGridCell>
                            </MCGrid>
                        </div>
                    </MCGridCell>
                </MCGrid>

                <MCGrid vertical-align="top">
                    <MCGridCell>
                        <div class="box-large"></div>
                    </MCGridCell>

                    <MCGridCell>
                        <div class="box"></div>
                    </MCGridCell>
                </MCGrid>

                <MCGrid vertical-align="middle">
                    <MCGridCell>
                        <div class="box-large"></div>
                    </MCGridCell>

                    <MCGridCell>
                        <div class="box"></div>
                    </MCGridCell>
                </MCGrid>

                <MCGrid vertical-align="bottom">
                    <MCGridCell>
                        <div class="box-large"></div>
                    </MCGridCell>

                    <MCGridCell>
                        <div class="box"></div>
                    </MCGridCell>
                </MCGrid>
            </div>

            <div>
                <p>Distribution</p>

                <MCGrid>
                    <MCGridCell>
                        <div class="box">
                            <MCGrid space-around>
                                <MCGridCell span="2">
                                    <div class="box-nested"></div>
                                </MCGridCell>

                                <MCGridCell span="2">
                                    <div class="box-nested"></div>
                                </MCGridCell>

                                <MCGridCell span="2">
                                    <div class="box-nested"></div>
                                </MCGridCell>
                            </MCGrid>
                        </div>
                    </MCGridCell>
                </MCGrid>

                <MCGrid>
                    <MCGridCell>
                        <div class="box">
                            <MCGrid space-between>
                                <MCGridCell span="2">
                                    <div class="box-nested"></div>
                                </MCGridCell>

                                <MCGridCell span="2">
                                    <div class="box-nested"></div>
                                </MCGridCell>

                                <MCGridCell span="2">
                                    <div class="box-nested"></div>
                                </MCGridCell>
                            </MCGrid>
                        </div>
                    </MCGridCell>
                </MCGrid>
            </div>

            <div>
                <p>Reordering</p>

                <MCGrid>
                    <MCGridCell>
                        <div class="box box-container">
                            <MCGrid>
                                <MCGridCell span="2">
                                    <div class="box-first">1</div>
                                </MCGridCell>

                                <MCGridCell span="2">
                                    <div class="box-first">2</div>
                                </MCGridCell>

                                <MCGridCell span="2">
                                    <div class="box-first">3</div>
                                </MCGridCell>

                                <MCGridCell span="2">
                                    <div class="box-first">4</div>
                                </MCGridCell>

                                <MCGridCell span="2">
                                    <div class="box-first">5</div>
                                </MCGridCell>

                                <MCGridCell span="2" order-first>
                                    <div class="box-nested">6</div>
                                </MCGridCell>
                            </MCGrid>
                        </div>
                    </MCGridCell>
                </MCGrid>

                <MCGrid>
                    <MCGridCell>
                        <div class="box box-container">
                            <MCGrid>
                                <MCGridCell span="2" order-last>
                                    <div class="box-nested">1</div>
                                </MCGridCell>

                                <MCGridCell span="2">
                                    <div class="box-first">2</div>
                                </MCGridCell>

                                <MCGridCell span="2">
                                    <div class="box-first">3</div>
                                </MCGridCell>

                                <MCGridCell span="2">
                                    <div class="box-first">4</div>
                                </MCGridCell>

                                <MCGridCell span="2">
                                    <div class="box-first">5</div>
                                </MCGridCell>

                                <MCGridCell span="2">
                                    <div class="box-first">6</div>
                                </MCGridCell>
                            </MCGrid>
                        </div>
                    </MCGridCell>
                </MCGrid>
            </div>

            <div>
                <p>Reversing</p>

                <MCGrid>
                    <MCGridCell>
                        <div class="box box-container">
                            <MCGrid reverse>
                                <MCGridCell span="2">
                                    <div class="box-nested">1</div>
                                </MCGridCell>

                                <MCGridCell span="2">
                                    <div class="box-nested">2</div>
                                </MCGridCell>

                                <MCGridCell span="2">
                                    <div class="box-nested">3</div>
                                </MCGridCell>

                                <MCGridCell span="2">
                                    <div class="box-nested">4</div>
                                </MCGridCell>

                                <MCGridCell span="2">
                                    <div class="box-nested">5</div>
                                </MCGridCell>

                                <MCGridCell span="2">
                                    <div class="box-nested">6</div>
                                </MCGridCell>
                            </MCGrid>
                        </div>
                    </MCGridCell>
                </MCGrid>
            </div>
		</div>
    )
}
