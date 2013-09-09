<div id="content-sections">
	<section id="api-docs-content">
		<div class="inner">
			<!--
			<aside>
				<div class="fixed-scroll">
					<div id="toc" class="reference-library">
						<ul class="level-1">
							<li class="highlighted">
								<a href="#access-point">Access Point Names</a>
								<ul class="level-2">
									<li><a href="#no-content">APN Categories and Features</a></li>
									<li><a href="#no-content">Available AT&amp;T APNs and Usage Descriptions</a></li>
									<li><a href="#no-content">Access, Capabilities, and Characteristics of AT&amp;T-supported APNs</a></li>
									<li><a href="#no-content">Custom APNs</a></li>
								</ul>
							</li>
							<li><a href="#no-content">Enabling Technologies</a></li>
							<li><a href="#no-content">Enterprise Technologies</a></li>
							<li>
								<a href="#no-content">Network Technologies</a>
								<ul class="level-2" style="display: none">
									<li><a href="#no-content">Authentication and Encryption</a></li>
									<li>
										<a href="#network-enterprise">Enterprise Network Considerations</a>
										<ul class="level-3" style="display: none">
											<li><a href="#no-content">Access Point Names (APNs)</a></li>
											<li><a href="#no-content">Custom APNs</a></li>
										</ul>
									</li>
									<li><a href="#no-content">Fixed-End Connections</a></li>
									<li><a href="#no-content">Fixed Mobile Convergence (FMC)</a></li>
									<li><a href="#no-content">IP networking</a></li>
									<li><a href="#no-content">Network Security</a></li>
									<li><a href="#no-content">Networking Considerations for Roaming</a></li>
									<li><a href="#no-content">Packet Data Protocol Contexts</a></li>
									<li><a href="#no-content">Technology Comparison</a></li>
									<li><a href="#no-content">Time Expiration Values</a></li>
									<li><a href="#no-content">Wi-Fi</a></li>
									<li><a href="#no-content">Wireline</a></li>
								</ul>
							</li>
							<li><a href="#no-content">Platform and OSes</a></li>
							<li><a href="#no-content">SDKs and Tools</a></li>
						</ul>
					</div>
				</div>
			</aside>

			<div class="main">
				<section class="level-1" id="access-point">
					<header>
						Access Point Names (APNs)
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

				<section class="level-1" id="network-enterprise">
					<header>
						Enterprise Network Considerations
						<span class="email form-icon" title="Mail this document">Print</span>
						<span class="print form-icon" title="Print this document">Email</span>
					</header>
					<p>
						Developers of mobile networking applications should understand how AT&amp;T's wireless network handles Internet Protocol (IP) data sessions, routes packets, and assigns IP addresses. They also should understand what types of connections are available to external networks.
					<p>
					</p>
						Some IP capabilities are native to GSM/GPRS, EDGE, and UTMS/HSDPA technologies, while other aspects of IP networking are features of the AT&amp;T wireless network. AT&amp;T offers wireless content providers considerable flexibility on IP addressing and routing through general as well as custom offers. IP networking options are generally the same across GPRS, EDGE, and UMTS/HSDPA networks.
					</p>
					<p>
						<strong>Communication Protocols</strong>
						<br />
						This brief discussion of the communication protocols supported by AT&amp;T assumes an understanding of Internet Protocol stacks. Content providers on the AT&amp;T wireless network can decide which protocols to use to obtain the best performance, functionality, and user experience in their wireless applications.
					</p>
					<p>
						<strong>Transport Layer Protocols</strong>
						<br />
						The AT&amp;T wireless network supports protocols in the transport layer of the stack:
					</p>
					<ul>
						<li> 
							<span><div class="title">Transmission Control Protocol (TCP).</div>
							Connection-oriented service with end-to-end reliability. TCP avoids congestion but incurs some overhead as a result. TCP generally works well over EDGE and UMTS/HSDPA networks.</span>
						</li>
						<li> 
							<span><div class="title">User Datagram Protocol (UDP).</div>
							Connectionless service with much less data overhead but no end-to-end reliability. UDP is suitable for streaming types of applications that can tolerate some packet loss. UDP also is commonly used in wireless middleware software that provides its own end-to-end reliability mechanisms.</span>
						</li>
					</ul>

					<p>
						<strong>Session and Application Layer Protocols</strong>
						<br />
						On GSM/GPRS and EDGE networks, you can use these commonly supported session and application layer protocols:
					</p>

					<ul>
						<li>
							<span>File Transfer Protocol (FTP)</span>
						</li>
						<li>
							<span>Hypertext Transfer Protocol (HTTP)</span>
						</li>
						<li>
							<span>Post Office Protocol 3 (POP3)</span>
						</li>
					</ul>

					<p>
						<strong>Optimized Communication Protocols</strong>
						<br />
						You might want to consider Internet protocols that are optimized for wireless networks if your application meets any of the following conditions:
					</p>

					<ul>
						<li>
							<span>It is deployed to a large user base.</span>
						</li>
						<li>
							<span>It performs a large number of transactions.</span>
						</li>
						<li>
							<span>It requires utmost reliability under demanding mobile conditions.</span>
						</li>
					</ul>
					<p>
						That's because common Internet protocols assume certain network characteristics that differ slightly from those of wireless connections. In addition, some application layer protocols cannot recover properly if a connection is lost in the middle of a transaction. <a href="#">Wireless middleware</a>, mobile/wireless <a href="#">VPNs</a>, <a href="#">WAP</a>, and platforms used by wireless application service providers all employ protocols developed specifically to offer reliable and efficient mobile communications.
					</p>
				</section>


				<section class="level-1" id="no-content">
					<div class="important form-icon-after">
						<p>Content not included in Live Prototype. View the Access Point Names for an example.</p>
					</div>
				</section>
				-->
				
				<!-- library menu -->
				<#assign libraryMenus = model.libraryMenu.item />
				<#list libraryMenus as libraryMenu>
					<#assign templateItem = siteItemService.getSiteItem(libraryMenu.key) />
					<#include templateItem.templatePath!'' />
				</#list>      
				<@ice id="libraryMenu" />
						
				
				<!-- library items -->
				<div class="main">
					<#assign libraryItems = model.libraryItem.item />
					<#list libraryItems as contentLibraryItem>
						<#assign templateItem = siteItemService.getSiteItem(libraryItem.key) />
						<#include templateItem.templatePath!'' />
					</#list>      
					<@ice id="libraryItem" />
				</div>
			
			</div>
		</div>
	</section>
</div>