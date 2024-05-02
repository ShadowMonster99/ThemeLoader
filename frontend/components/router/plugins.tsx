import React, { useEffect, useState } from 'react';
import { DialogBody, DialogHeader, IconsModule, Millennium, Toggle, classMap, findClass } from 'millennium-lib';
import { PluginComponent } from '../../types/types';

interface EditPluginProps {
	plugin: PluginComponent
}

const isEditablePlugin = (plugin_name: string) => {
	return window.PLUGIN_LIST && window.PLUGIN_LIST[plugin_name] 
	&& typeof window.PLUGIN_LIST[plugin_name].renderPluginSettings === 'function' ? true : false
}

const EditPlugin: React.FC<EditPluginProps> = ({ plugin }) => {

	if (!isEditablePlugin(plugin?.data?.name)) {
		return <></>
	}

	return (
		<div className="_1WKUOT3FdB9-48MMP0Tz9l Focusable" style={{marginTop: 0, marginLeft: 0, marginRight: 15}} tabIndex={0}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
				<path d="M21.75 18C21.75 18.7417 21.5301 19.4667 21.118 20.0834C20.706 20.7001 20.1203 21.1807 19.4351 21.4645C18.7498 21.7484 17.9958 21.8226 17.2684 21.6779C16.541 21.5332 15.8728 21.1761 15.3484 20.6517C14.8239 20.1272 14.4668 19.459 14.3221 18.7316C14.1774 18.0042 14.2516 17.2502 14.5355 16.5649C14.8193 15.8797 15.2999 15.294 15.9166 14.882C16.5333 14.4699 17.2583 14.25 18 14.25C18.9946 14.25 19.9484 14.6451 20.6517 15.3483C21.3549 16.0516 21.75 17.0054 21.75 18ZM6 14.25C5.25832 14.25 4.5333 14.4699 3.91661 14.882C3.29993 15.294 2.81928 15.8797 2.53545 16.5649C2.25162 17.2502 2.17736 18.0042 2.32206 18.7316C2.46675 19.459 2.8239 20.1272 3.34835 20.6517C3.8728 21.1761 4.54098 21.5332 5.26841 21.6779C5.99584 21.8226 6.74984 21.7484 7.43506 21.4645C8.12029 21.1807 8.70596 20.7001 9.11801 20.0834C9.53007 19.4667 9.75 18.7417 9.75 18C9.75 17.0054 9.35491 16.0516 8.65165 15.3483C7.94839 14.6451 6.99456 14.25 6 14.25ZM30 14.25C29.2583 14.25 28.5333 14.4699 27.9166 14.882C27.2999 15.294 26.8193 15.8797 26.5355 16.5649C26.2516 17.2502 26.1774 18.0042 26.3221 18.7316C26.4668 19.459 26.8239 20.1272 27.3484 20.6517C27.8728 21.1761 28.541 21.5332 29.2684 21.6779C29.9958 21.8226 30.7498 21.7484 31.4351 21.4645C32.1203 21.1807 32.706 20.7001 33.118 20.0834C33.5301 19.4667 33.75 18.7417 33.75 18C33.75 17.0054 33.3549 16.0516 32.6517 15.3483C31.9484 14.6451 30.9946 14.25 30 14.25Z" fill="currentColor"></path>
			</svg>
		</div>
	)
}

const PluginViewModal: React.FC = () => {

	const [plugins, setPlugins] = useState<PluginComponent[]>([])
	const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});

	useEffect(() => {
		Millennium.callServerMethod("find_all_plugins").then((value: string) => {
			const json: PluginComponent[] = JSON.parse(value)

			setCheckedItems(
				json.map((plugin: PluginComponent, index: number) => ({ plugin, index })).filter(({ plugin }) => plugin.enabled)
				.reduce((acc, { index }) => ({ ...acc, [index]: true }), {})
			)
			setPlugins(json)
		})
	}, [])

	const checkBoxChange = (index: number, checked: boolean): void => {
		console.log(checked)
		setCheckedItems({ ...checkedItems, [index]: checked});
	}

	const handleCheckboxChange = (index: number) => {
		
		/* Prevent users from disabling this plugin, as its vital */
		const updated: boolean = !checkedItems[index] || plugins[index]?.data?.name === "millennium__internal"
		setCheckedItems({ ...checkedItems, [index]: updated});

		Millennium.callServerMethod("update_plugin_status", { plugin_name: plugins[index]?.data?.name, enabled: updated })
	};

	return (
		<>
		<DialogHeader>Plugins</DialogHeader>
		<DialogBody className={classMap.SettingsDialogBodyFade}>
			{plugins.map((plugin: PluginComponent, index: number) => (

				<div className="S-_LaQG5eEOM2HWZ-geJI qFXi6I-Cs0mJjTjqGXWZA _3XNvAmJ9bv_xuKx5YUkP-5 _3bMISJvxiSHPx1ol-0Aswn _3s1Rkl6cFOze_SdV2g-AFo _5UO-_VhgFhDWlkDIOZcn_ XRBFu6jAfd5kH9a3V8q_x wE4V6Ei2Sy2qWDo_XNcwn Panel" key={index}>
					<div className={classMap.FieldLabelRow}>
					<div className="_3b0U-QDD-uhFpw6xM716fw">{plugin?.data?.common_name}</div>
					<div className={classMap.FieldChildrenWithIcon} style={{display: "flex", alignItems: "center"}}>
						<EditPlugin plugin={plugin}/>
						<div className="_3N47t_-VlHS8JAEptE5rlR">
							<Toggle 
								disabled={plugin?.data?.name == "millennium__internal"} 
								value={checkedItems[index]} 
								onChange={(checked: boolean) => checkBoxChange(index, checked)}>
							</Toggle>
						</div>
					</div>
					</div>
					<div className={classMap.FieldDescription}>{plugin?.data?.description ?? "No description yet."}</div>
				</div>
			))} 
		</DialogBody>
		</>
	)
}

export { PluginViewModal }