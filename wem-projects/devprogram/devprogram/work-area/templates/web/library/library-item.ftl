<#assign libraryItemTitle = model.title />

<section class="level-1" id="access-point">
	<header>
		Access Point Names : ${libraryItemTitle}
		<span class="email form-icon" title="Mail this document">Print</span>
		<span class="print form-icon" title="Print this document">Email</span>
	</header>
	<p>
		The AT&amp;T wireless network connects with multiple external networks, including the Internet and specific enterprise networks. An Access Point Name (APN) identifies these external networks during a data session.
	</p>
	<p>
		The APN specifies the external networks that a mobile device can access. It also defines which type of IP address to use, which security mechanisms to invoke, and which fixed-end connections to use.
	</p>
	<p>
		The APNs available to a device are specified as part of the subscriber account. A mobile station can have access to more than one APN, though each PDP context (data session) specifies which individual APN to use.
	</p>
	<p>
		<strong>AT&amp;T APNs</strong>
	</p>
	<p>
		AT&amp;T APNs fall into three categories:
	</p>
	<ul>
		<li>
			<span><strong>General:</strong> These are the APNs used for most user accounts. The current general APNs are wap.cingular and isp.cingular.</span>
		</li>
		<li>
			<span><strong>Special Purpose APN:</strong> These are predefined APNs for special but relatively common usage scenarios.</span>
		</li>
		<li>
			<span><strong>Custom APN:</strong> These are APNs to address unique customer requirements. Customers can customize many attributes of these APNs.</span>
		</li>
	</ul>

	<p>
		<a href="#">Download APN Categories and Features table</a>
	</p>

	<p>
		<strong>Access Control</strong> refers to firewall rules that can be configured for custom APNs but are fixed for general and special purpose APNs.
		The IP address assigned to the mobile station is pseudo-random; it is pulled from a pool of addresses configured in the network infrastructure for each designated APN.
	</p>

	<p>
		<a href="#">Download Available AT&amp;T APNs and Usage Descriptions</a>
	</p>

	<p>
		<a href="#">Download Access, Capabilities, and Characteristics of AT&amp;T-supported APNs</a>
	</p>

	<p>
		<strong>User Names and Passwords</strong>
		<br />
		User names and passwords must be entered to access particular APNs. For most devices, these values are preprogrammed. There are a few scenarios, however, where you may need to enter these values, such as when configuring a dial-up connection manually for using a phone as a modem.
	</p>

	<table>
		<thead>
			<tr>
				<th>
					APN
				</th>
				<th>
					Username
				</th>
				<th>
					Password
				</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					wap.cingular
				</td>
				<td>
					wap@cingulargprs.com
				</td>
				<td>
					cingular1
				</td>
			</tr>
			<tr>
				<td>
					isp.cingular
				</td>
				<td>
					isp@cingular.com
				</td>
				<td>
					cingular1
				</td>
			</tr>
			<tr>
				<td>
					Custom
				</td>
				<td>
					APN-specific
				</td>
				<td>
					APN-specific
				</td>
			</tr>
		</tbody>
	</table>

	<p>
		<strong>Choosing APNs and Addressing Options</strong>
		<br />
		Here are some guidelines to assist in choosing the type of APN and addressing options best suited for your business:
	</p>

	<ul class="questions">
		<li>
			<span><strong>Are you using a standard AT&amp;T offer (e.g., a RIM BlackBerry solution)?</strong>
			<br />
			IP addressing issues are handled in the offer and you do not need to do anything special.</span>
		</li>
		<li>
			<span><strong>Do you need a fixed-end connection to restrict access to just the network and servers?</strong>
			<br />
			Customers should use a custom APN in conjunction with the AT&amp;T Commercial Connectivity Service.</span>
		</li>
		<li>
			<span><strong>Do you have unique networking requirements?</strong>
			<br />
			You may need a custom APN to specify networking options such as Internet blocking, working with a range of specific IP addresses, mobile terminated communications, and static IP addresses.</span>
		</li>
		<li>
			<span><strong>Do you need mobile terminated data?</strong>
			<br />
			The standard wap.cingular and isp.cingular APNs block unsolicited communications that terminate at the mobile device. Applications may need the mobile device to poll for data or respond to an SMS (short message service) notification. You can obtain an internet APN which allows mobile termination or a custom APN where mobile termination can be enabled as an option.</span>
		</li>
		<li>
			<span><strong>Legacy APNs</strong>
			<br />
			Companies with deployments using devices with SIMs (Security Identity Modules) based on legacy APNs can continue to use these devices, and they will operate as normal. However, new device and service offerings from AT&amp;T are based on the general, special purpose, and custom APNs described here.</span>
		</li>
	</ul>
</section>
				
				<!-- library menu -->
				<#assign libraryMenus = model.libraryMenu.item />
				<#list libraryMenus as libraryMenu>
					<#assign templateItem = siteItemService.getSiteItem(libraryMenu.key) />
					<#include templateItem.templatePath!'' />
				</#list>      
				<@ice id="libraryMenu" />